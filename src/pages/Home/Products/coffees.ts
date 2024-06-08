import expressoImg from '../../../assets/expresso.svg';
import americanoImg from '../../../assets/americano.svg';
import expressoCremosoImg from '../../../assets/expresso-cremoso.svg';
import cafeGeladoImg from '../../../assets/cafe-gelado.svg';
import cafeComLeiteImg from '../../../assets/cafe-com-leite.svg';
import latteImg from '../../../assets/latte.svg';
import capuccinoImg from '../../../assets/capuccino.svg';
import macchiatoImg from '../../../assets/macchiato.svg';
import mocaccinoImg from '../../../assets/mochaccino.svg';
import chocolateQuenteImg from '../../../assets/chocolate-quente.svg';
import cubanoImg from '../../../assets/cubano.svg';
import havaianoImg from '../../../assets/havaiano.svg';
import arabeImg from '../../../assets/arabe.svg';
import irlandesImg from '../../../assets/irlandes.svg';
import { ProductProps } from '../Product';

export const coffees: ProductProps[] = [
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b903",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    imgSrc: expressoImg,
    price: 9.99,
    badges: [
      {
        text: "Tradicional",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b904",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    imgSrc: americanoImg,
    price: 9.99,
    badges: [
      {
        text: "Tradicional",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b905",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    imgSrc: expressoCremosoImg,
    price: 9.99,
    badges: [
      {
        text: "Tradicional",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b906",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    imgSrc: cafeGeladoImg,
    price: 9.99,
    badges: [
      {
        text: "Tradicional",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      },
      {
        text: "Gelado",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14916",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b907",
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    imgSrc: cafeComLeiteImg,
    price: 9.99,
    badges: [
      {
        text: "Tradicional",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      },
      {
        text: "Com Leite",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14916",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b908",
    title: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    imgSrc: latteImg,
    price: 9.99,
    badges: [
      {
        text: "Tradicional",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      },
      {
        text: "Com Leite",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14916",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b909",
    title: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    imgSrc: capuccinoImg,
    price: 9.99,
    badges: [
      {
        text: "Tradicional",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      },
      {
        text: "Com Leite",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14916",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b910",
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    imgSrc: macchiatoImg,
    price: 9.99,
    badges: [
      {
        text: "Tradicional",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      },
      {
        text: "Com Leite",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14916",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b911",
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    imgSrc: mocaccinoImg,
    price: 9.99,
    badges: [
      {
        text: "Tradicional",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      },
      {
        text: "Com Leite",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14916",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b912",
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    imgSrc: chocolateQuenteImg,
    price: 9.99,
    badges: [
      {
        text: "Tradicional",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      },
      {
        text: "Com Leite",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14916",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b913",
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    imgSrc: cubanoImg,
    price: 9.99,
    badges: [
      {
        text: "Tradicional",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      },
      {
        text: "Alcoólico",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14916",
      },
      {
        text: "Gelado",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14917",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b914",
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    imgSrc: havaianoImg,
    price: 9.99,
    badges: [
      {
        text: "Especial",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b915",
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    imgSrc: arabeImg,
    price: 9.99,
    badges: [
      {
        text: "Especial",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      }
    ]
  },
  {
    id: "71982b2f-d817-4a1e-864d-891b5729b916",
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    imgSrc: irlandesImg,
    price: 9.99,
    badges: [
      {
        text: "Especial",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14915",
      },
      {
        text: "Alcoólico",
        id: "b7cdea32-2a33-4bea-8e95-b60639b14916",
      }
    ]
  },
]

