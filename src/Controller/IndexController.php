<?php

namespace App\Controller;
use App\Entity\CookieOrder;
use Symfony\Component\HttpFoundation\{Request, JsonResponse};
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="index")
     * 
     */
    public function index()
    {
        return $this->render('orders/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }

/**
 * @Route("/order", name="order")
 * method to save cookie orders
 */
    public function createCookieOrder(ValidatorInterface $validator, Request $request): JsonResponse
    {
        $entityManager = $this->getDoctrine()->getManager();


        $order = new CookieOrder();


        /** Got null using this approach and looks like this is a known bug which is not yet resolved in httpfoundation 
         * https://github.com/symfony/symfony/issues/24262
        */
        //  $requestBody = json_decode($request->getContent(), true);

        $requestBody = $request->request->get('orderTimestamp');

         

      /** Another approach: On request from user to this URL, a time stamp is generated and saved */
        $currentOrderTime = new \DateTime();

        $order->setTimestamp($currentOrderTime);
        
        $errors = $validator->validate($order);

        if (count($errors) > 0) {

            $messages = [];
                foreach ($errors as $violation) {
                     $messages[$violation->getPropertyPath()][] = $violation->getMessage();
                }
                return new JsonResponse($messages);
        }


        $entityManager->persist($order);

        $entityManager->flush();

        return new JsonResponse(['order' => 'Order successfully saved with id '.$order->getId(), 'order timestamp' => $currentOrderTime], 
        JsonResponse::HTTP_CREATED);
    }









}
