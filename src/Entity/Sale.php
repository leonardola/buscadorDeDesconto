<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Sale
 *
 * @ORM\Table(name="sale", indexes={@ORM\Index(name="fk_sale_review_idx", columns={"review_reviewId"})})
 * @ORM\Entity
 */
class Sale
{
    /**
     * @var int
     *
     * @ORM\Column(name="idsale", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idsale;

    /**
     * @var string
     *
     * @ORM\Column(name="price", type="decimal", precision=10, scale=2, nullable=false)
     */
    private $price;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime", nullable=false)
     */
    private $date;

    /**
     * @var string
     *
     * @ORM\Column(name="product_name", type="string", length=200, nullable=false)
     */
    private $productName;

    /**
     * @var string
     *
     * @ORM\Column(name="store", type="string", length=100, nullable=false)
     */
    private $store;

    /**
     * @var string
     *
     * @ORM\Column(name="score", type="decimal", precision=10, scale=2, nullable=false)
     */
    private $score;

    /**
     * @var \Review
     *
     * @ORM\ManyToOne(targetEntity="Review")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="review_reviewId", referencedColumnName="reviewId")
     * })
     */
    private $reviewReviewid;

    public function getIdsale(): ?int
    {
        return $this->idsale;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getProductName(): ?string
    {
        return $this->productName;
    }

    public function setProductName(string $productName): self
    {
        $this->productName = $productName;

        return $this;
    }

    public function getStore(): ?string
    {
        return $this->store;
    }

    public function setStore(string $store): self
    {
        $this->store = $store;

        return $this;
    }

    public function getScore(): ?string
    {
        return $this->score;
    }

    public function setScore(string $score): self
    {
        $this->score = $score;

        return $this;
    }

    public function getReviewReviewid(): ?Review
    {
        return $this->reviewReviewid;
    }

    public function setReviewReviewid(?Review $reviewReviewid): self
    {
        $this->reviewReviewid = $reviewReviewid;

        return $this;
    }


}
