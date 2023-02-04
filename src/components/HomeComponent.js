import React, {useState} from "react";
import {Button} from 'reactstrap';
import CallToAction from './CallToAction';
import Special from './Special';
import Bruschetta from '../images/bruchetta.svg';

function Home(props) {
  const dishes = [
    {
      title: "Greek Salad",
      price: "12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../images/greek salad.jpg"),
    },
    {
      title: "Bruschetta",
      price: "5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => Bruschetta,
    },
    {
      title: "Lemon Dessert",
      price: "5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      getImageSrc: () => require("../images/lemon dessert.jpg"),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return(
    <div className="container">
      <CallToAction />
      <section className="row align-items-start mt-5">
        <h2 className="col-auto">This week's specials!</h2>
        <Button className="button float-right" onClick={toggleModal}>
          Online Menu
        </Button>
        <div className="w-100"></div>
        {dishes.map((dish) => (
          <article className="col-12 col-sm-4 my-2" key={dish.title}>
            <Special item={dish} />
          </article>
        ))}
      </section>
    </div>
  );
}

export default Home;