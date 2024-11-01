import Image, { StaticImageData } from 'next/image';

import fullStar from '../../../public/assets/svg/full-star-avaliacao.svg';
import { Inter, Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

interface AvaliacaoProps {
    texto: string;
    image:  StaticImageData | string;
    nome: string;
}

export const Avaliacao = ({ texto, image, nome }: AvaliacaoProps) =>{
    return(
        <li className='flex-1 min-w-[460px] p-10 round-tl-[10px] rounded-tr-[10px] shadow border-b-4 border-solid border-corP1 grid'>
            <p className={`${roboto.className} text preto`}>{texto}</p>
            <div className='flex items-center mt-[60px] gap-5 self-end'>
                <Image
                    src={image}
                    alt={nome}
                    width={64}
                    height={64}
                    className='rounded-full'
                />
                <div className='flex flex-col'>
                    <h3 className={`${inter.className}text-2xl font-semibold`}>{nome}</h3>
                    <div className="flex">
                        <Image src={fullStar} alt='Estrela de Avaliação'/>
                        <Image src={fullStar} alt='Estrela de Avaliação'/>
                        <Image src={fullStar} alt='Estrela de Avaliação'/>
                        <Image src={fullStar} alt='Estrela de Avaliação'/>
                        <Image src={fullStar} alt='Estrela de Avaliação'/>
                    </div>
                </div>
            </div>
        </li>
    );
};