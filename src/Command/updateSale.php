<?php
namespace App\Command;

use App\Entity\Product;
use App\Entity\Sale;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputArgument;


class updateSale extends Command
{
    // the name of the command (the part after "bin/console")
    protected static $defaultName = 'app:update-sale';
    private $em;

    public function __construct(bool $requirePassword = false, EntityManagerInterface $em)
    {
        $this->em = $em;
        // best practices recommend to call the parent constructor first and
        // then set your own properties. That wouldn't work in this case
        // because configure() needs the properties set in this constructor
        $this->requirePassword = $requirePassword;

        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $products = $this->em->getRepository(Product::class)->findAll();

        foreach ($products as $product) {
            $reviews = $this->em->createQuery(
                "SELECT r FROM App\Entity\Review r "
                ."WHERE r.product = :product "
                ."ORDER BY r.id DESC"
            )
                ->setParameter("product", $product)
                ->setMaxResults(2)
                ->execute();

            if($reviews && $reviews[0]->getPrice() < $reviews[1]->getPrice()) {
                $product->setOnSale(true);
            }
        }

        $this->em->flush();
    }
}
