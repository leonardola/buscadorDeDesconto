<?php


namespace App\Controller;


use App\Entity\Product;
use App\Entity\Review;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use Doctrine\ORM\EntityManagerInterface;

class IndexController extends AbstractController
{
	private $em, $publicDir;

	public function __construct(EntityManagerInterface $em, $publicDir) {
		$this->em = $em;
		$this->publicDir = $publicDir;
	}

    /**
     * @Route("/")
     */
    public function index()
    {
        return $this->render('index.html.twig');            
    }

    /**
     * @Route("/getProductByCode/{code}")
     */
    public function getProductByCode($code)
    {
    	$product = $this->em->getRepository(\App\Entity\Product::class)->findOneBy(['code'=> $code]);
        $reviews = $this->em->getRepository(\App\Entity\Review::class)->findBy(['product'=> $product]);


        $data = [];

    	if($product) {
    		$data = [
	    		'id'=> $product->getId(),
	    		'name' => $product->getName(),
	    		'description' => $product->getDescription(),
	    		'code' => $product->getCode(),
                'reviews'=>[]
    		];
    		foreach ($reviews as $review){

                $date = $review->getDate();
                $datetime = $date->format('d/m/Y');

    		    $data['reviews'][] = [
                    'id'=> $review->getId(),
                    'username' => $review->getUsername(),
                    'dateTime' => $datetime,
                    'score' => $review->getScore(),
                    'review' => $review->getReview()
                ];
            }
    	}
		 

    	return $this->json($data);
    }
    /**
     * @Route("/registerProduct")
     */
    public function registerProduct(request $request)
    {
        $data = $request->request->all();
        //criar cadastro no banco usando o doctrine
        $em = $this->getDoctrine()->getManager();
        $product = new Product();
        $product
            ->setCode($data['codigo'])
            ->setDescription($data['descricao'])
            ->setName($data['nome'])
            ->set($data['image']) ;

        $em->persist($product);
        $this->em->flush();

        return $this->json([]);
    }

    /**
     * @Route("/registerReview/{productId}")
     */
    public function registerReview(request $request, $productId)
    {

        $product = $this->em->getRepository(\App\Entity\Product::class)->find($productId);
        $data = $request->request->all();
        //criar cadastro no banco usando o doctrine
        $em = $this->getDoctrine()->getManager();
        $review = new Review();
        $review
            ->setUsername($data['username'])
            ->setScore($data['score'])
            ->setReview($data['text'])
            ->setDate(new \DateTime())
            ->setProduct($product);

        $em->persist($review);
        $this->em->flush();

        return $this->json([]);
    }
    /**
     * @Route("/uploadImage")
     */
    public function uploadImage(){

        /* Getting file name */
        $filename = $_FILES['file']['name'];

        /* Location */
        $location = $this->publicDir."/uploads/".$filename;
        $uploadOk = 1;
        $imageFileType = pathinfo($location,PATHINFO_EXTENSION);

        /* Valid Extensions */
        $valid_extensions = array("jpg","jpeg","png");
        /* Check file extension */
        if( !in_array(strtolower($imageFileType),$valid_extensions) ) {
            $uploadOk = 0;
        }

        if($uploadOk == 0){
            echo 0;
        }else{
            /* Upload file */
            if(copy($_FILES['file']['tmp_name'],$location)){
                echo $location;
            }else{
                echo 0;
            }

        }

    }
}



