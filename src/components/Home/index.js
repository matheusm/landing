import React from "react";
import "./home.css";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import AppsIcon from "@material-ui/icons/Apps";
import Image from "../../assets/images/image.webp";

export default function Home() {
  return (
    <section className="container">
      <div className="home__buttons">
        <button>
          <AppsIcon /> Quantidade
        </button>
        <button>
          <CompareArrowsIcon /> Ordenar
        </button>
      </div>

      <div className="grid-container">
        <div class="item1">
          <h1 className="title">Some title here</h1>
          <p className="paragraph__bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="item2 --box">
          <h1 className="title">Some title here</h1>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </p>
        </div>
        <div class="item3 --box">
          <h1 className="title">Some title here</h1>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </p>
        </div>
        <div class="item4">
          <h1 className="title --destaque">
            Some title <b>here</b>
          </h1>
          <img src={Image} alt="Dale"/>
        </div>
        <div class="item5 --box">
          <h1 className="title">Some title here</h1>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </p>
        </div>
        <div class="item6">
          <h1 className="title --destaque">
            Some title <b>here</b>
          </h1>
        </div>
      </div>
    </section>
  );
}
