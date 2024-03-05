import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState, useRef } from 'react';
import { CarouselItem } from './CarouselItem';

const dataCarousel = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: "https://picsum.photos/id/1/460/200",
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "https://picsum.photos/id/2/460/200",
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: "https://picsum.photos/id/4/460/200",
  },
];

export const CarouselSlider = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View style={{borderColor: 'red', borderWidth :1, justifyContent: 'center', alignItems: 'center'}}>
      <Carousel
        vertical={false}
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={dataCarousel}
        renderItem={CarouselItem}
        itemWidth={370}
        sliderWidth={1000}
        inactiveSlideShift={4}
        inactiveSlideOpacity={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
        autoplay={true}
        autoplayDelay={6000}
        autoplayInterval={6000}
      />
      <Pagination
        dotsLength={dataCarousel.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#000'
        }}
        inactiveDotStyle={{
          width: 7,
          height: 7,
          backgroundColor: '#c4c4c4'
        }}
        containerStyle={{
          marginTop: -20,
          marginBottom: -25
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={0.6}
        activeOpacity={1}
        tappableDots={true}
      />
    </View>
  )
}