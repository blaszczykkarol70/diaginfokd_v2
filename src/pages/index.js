import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';


export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            DiagInfo KD
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          Diagnostyka, naprawa, regeneracja części oraz maszyn OFF-HIGHWAY.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Oferta</Button>
          </p>
          <p className="mt-4 text-gray-600">Zapraszamy do naszej oferty</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Informacje</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Dane firmy:</p>
              <p className="mt-4">
              DIAGINFO KD KAROL BŁASZCZYK
              </p>
              <p className="mt-4">
              Milejów 70, 62-704 Kawęczyn
              </p>
              <p className="mt-4">
              Nip. 6681951394
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Dane kontaktowe: </p>
              <p className="mt-4">
                Nr. tel. 781378374
                e-mail: diaginfokd@gmail.com
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service</p>
              <p className="mt-4">
                .
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Diagnostyka</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Obecnie narzędzia diagnostyczne są częścią podstawowego wyposażenia każdego warsztatu. Jakakolwiek naprawa wymaga konfiguracji i aktywacji obecnie możliwej do wykonania tylko poprzez narzędzie diagnostyczne.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            NAVIGATOR TXTs
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Uniwersalny tester diagnostyczny.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    {/* <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    /> */}
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Zadowoleni klienci </LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="" />
          </div>
        </div>
      </div>
    </section>
    {/* <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section> */}
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Zapraszamy do współpracy</h3>
      <p className="mt-8 text-xl font-light">
        
      </p>
      <p className="mt-8">
        <Button size="xl">Oferta</Button>
      </p>
    </section>
  </Layout>
);
