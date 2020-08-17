<?php

namespace App\Repository;

use App\Entity\CookieOrder;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CookieOrder|null find($id, $lockMode = null, $lockVersion = null)
 * @method CookieOrder|null findOneBy(array $criteria, array $orderBy = null)
 * @method CookieOrder[]    findAll()
 * @method CookieOrder[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CookieOrderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CookieOrder::class);
    }

    // /**
    //  * @return CookieOrder[] Returns an array of CookieOrder objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CookieOrder
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
