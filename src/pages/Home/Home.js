import React from 'react';
import { ContainerPage, TitlePage } from "../../components/Main";
import ImageSlider from '../../components/carousel/ImageSlider';
import { SliderData } from '../../components/carousel/SliderData';


const Page = () => {
    return(
        <ContainerPage>
            <TitlePage>
                <ImageSlider slides={SliderData}>
                </ImageSlider>
            </TitlePage>
        </ContainerPage>
    );
}

export default Page;
