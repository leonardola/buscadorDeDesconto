<?php


namespace App\Controller;


use App\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use Doctrine\ORM\EntityManagerInterface;

class IndexController extends AbstractController
{
	private $em;

	public function __construct(EntityManagerInterface $em) {
		$this->em = $em;
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
		
		$data = [];

    	if($product) {
    		$data = [
	    		'id'=> $product->getId(),
	    		'name' => $product->getName(),
	    		'description' => $product->getDescription(),
	    		'code' => $product->getCode()
    		];
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
            ->setName($data['nome']);

        $em->persist($product);
        $this->em->flush();

        return $this->json([]);
    }

}
