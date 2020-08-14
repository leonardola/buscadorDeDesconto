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
                'image'=>$product->getImage(),
                'reviews'=>[]
    		];
    		foreach ($reviews as $review){

                $date = $review->getDate();
                $datetime = $date->format('d/m/Y');

    		    $data['reviews'][] = [
                    'id'=> $review->getReviewid(),
                    'username' => $review->getUsername(),
                    'dateTime' => $datetime,
                    'score' => $review->getScore(),
                    'review' => $review->getReview(),
                    'price' => $review->getPrice()
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
        $filename = $_FILES['file']['name'];
        $location = $this->publicDir."/uploads/".$filename;
        $path = "/uploads/".$filename;
        $em = $this->getDoctrine()->getManager();
        $product = new Product();
        $product
            ->setCode($data['codigo'])
            ->setDescription($data['descricao'])
            ->setName($data['nome'])
            ->setImage($path);
        $em->persist($product);
        $this->em->flush();

            if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
                echo $location;
            }

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
            ->setProduct($product)
            ->setPrice($data['price']);

        $em->persist($review);
        $this->em->flush();


        return $this->json([]);
    }
}



