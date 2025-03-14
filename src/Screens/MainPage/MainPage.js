import React, { useState } from "react";
import './MainPage.css';
import { Button } from "@mui/material";
import TutorialCard from "../../Components/TutorialCard/TutorialCard";
import EventsCard from "../../Components/EventsCard";
import JobPostingCard from "../../Components/JobPostingsCard";
import ReferencesCard from "../../Components/ReferencesCard";

const MainPage = () => {

    const [eventsText, setEventsText] = useState("Uzman eğitmenler ile farklı yazılım dillerinde eğitimler alıp, projeler üzerinde çalışarak gerçek dünya tecrübesi edin, kariyerinde hızla yüksel.");

    const handleEvents = (eventType) => {
        switch (eventType) {
            case "Bootcamp":
                setEventsText("Uzman eğitmenler ile farklı yazılım dillerinde eğitimler alıp, projeler üzerinde <br/> çalışarak gerçek dünya tecrübesi edin, kariyerinde hızla yüksel.");
                break;
            case "Hackathon":
                setEventsText("Gerçek dünya problemlerine yenilikçi çözümler üretmek için Hackathon'lara katıl!");
                break;
            case "HiringChallange":
                setEventsText("Gerçek iş dünyasından görevlerle becerilerini kanıtla, yetenek avcılarının radarına gir ve hayalindeki işe daha hızlı ulaş.");
                break;
            default:
                setEventsText("Uzman eğitmenler ile farklı yazılım dillerinde eğitimler alıp, projeler üzerinde çalışarak gerçek dünya tecrübesi edin, kariyerinde hızla yüksel.");
                break;
        }
    };

    return (
        <div className="main-container">
            <div className="hero-section">
                <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fafafa', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ color: '#47c26d', marginRight: '5px', fontSize: '30px' }}>Techcareer.net ile</p>
                    <p style={{ fontSize: '30px' }}>teknoloji <br /> kariyerinde hep ileriye</p>
                    <img
                        src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Fcall-to-actions%2Fhome%2Fcta-img.png&w=640&q=75"
                        alt="computer"
                        style={{ height: '40%' }}
                    />
                </div>
            </div>

            <div className="events-section">
                <h1>Etkinliklerimiz</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant="outlined" style={{ margin: '5px' }} onClick={() => handleEvents('Bootcamp')}>Bootcamp</Button>
                    <Button variant="outlined" onClick={() => handleEvents('Hackathon')} style={{ margin: '5px' }}>Hackathon</Button>
                    <Button variant="outlined" style={{ margin: '5px' }}>Hiring Challenge</Button>
                </div>
                <p className="events-description" dangerouslySetInnerHTML={{ __html: eventsText }} />
                <Button className="button">Hemen Başvur</Button>
                <h2>Başvuruya Açık Etkinlikler</h2>
                <div className="events-card-container">
                    <EventsCard imageUrl={'https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FDokuz_Eyluel_Ueniversitesi_Detech_25_54b99ffc58%2FDokuz_Eyluel_Ueniversitesi_Detech_25_54b99ffc58.png&w=384&q=75'} title={"DETECH'25"} description={'Teknoloji ile Dünyayı Değiştir'} />
                    <EventsCard imageUrl={'https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FSwift_Craft_336x180_080190bd54%2FSwift_Craft_336x180_080190bd54.png&w=384&q=75'} title={"SwiftCraft: IOS Development Bootcamp"} />
                    <EventsCard imageUrl={'https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1200x628_41_4028b4cf4f%2F1200x628_41_4028b4cf4f.png&w=384&q=75'} title={'Experian Young Talent Bootcamp'} description={'Ücretsiz Öğren'} />
                </div>

                <h2>İş İlanları</h2>
                <div className="job-postings-card-container">
                    <JobPostingCard image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fresim_21ae22cb29%2Fresim_21ae22cb29.jpg&w=64&q=100' title='Data Engineer' company={'Cherry'} />
                    <JobPostingCard image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fresim_21ae22cb29%2Fresim_21ae22cb29.jpg&w=64&q=100' title='Data Engineer' company={'Cherry'} />
                </div>

                <h2>Eğitimlerimiz</h2>
                <div className="tutorials-card-container">
                    <TutorialCard title={'Sanal Makine '} mentor='Hamit Mızrak' image={'https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F360x180_sanalmakine_991f137fef%2F360x180_sanalmakine_991f137fef.png&w=384&q=75'} />
                    <TutorialCard title={'Angular Eğitimi'} mentor='Hamit Mızrak' image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F360x180_04_5ae833c328%2F360x180_04_5ae833c328.png&w=384&q=75' />
                    <TutorialCard title={'uygulamlarla SQL Eğitimi'} mentor='Hamit Mızrak' image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F360x180_03_fde2e60fde%2F360x180_03_fde2e60fde.png&w=384&q=75'/>
                </div>
                <Button className="button">Tümünü Gör</Button>

                <h2>Testlerimiz</h2>
                <div className="tests-card-container">
                    <TutorialCard title='C# Teknik Test (Başlangıç Seviye)' image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FTestler_kapak_goersel_boyutu_7_2d0f5d4fc2%2FTestler_kapak_goersel_boyutu_7_2d0f5d4fc2.png&w=384&q=75' />
                    <TutorialCard title='.NET Teknik Test (Başlangıç Seviye)' image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FTestler_kapak_goersel_boyutu_9_e9f7be4383%2FTestler_kapak_goersel_boyutu_9_e9f7be4383.png&w=384&q=75' />
                    <TutorialCard title='Java Teknik Test' image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FTestler_kapak_goersel_boyutu_8_ee62a1517e%2FTestler_kapak_goersel_boyutu_8_ee62a1517e.png&w=384&q=75'/>
                </div>
                <Button className="button"> Tümünü Gör </Button>

                <div style={{backgroundColor:'#29334a'}}>
                    <img  
                    src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fsoezluek_banner_web_tr_8b33b51f19%2Fsoezluek_banner_web_tr_8b33b51f19.png&w=1200&q=100"
                    alt=""/>

                </div>  
                              
            </div>
            <h2>Refereranslarımız</h2>
            <div style={{flexDirection:'row', display:'flex',}}>
                <TutorialCard title='SAN TSG & Paximum'
                image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FSAN_referanslar_0dd2265cfa%2FSAN_referanslar_0dd2265cfa.png&w=384&q=100'/>
                <TutorialCard 
                image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FTHY_Referanslar_logo_e0f987504f%2FTHY_Referanslar_logo_e0f987504f.png&w=384&q=100'
                title='Türk Hava Yolları'/>
                <TutorialCard
                title='Hangi Kredi'
                image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fhangikredi_referanslar_logo_789f90fe70%2Fhangikredi_referanslar_logo_789f90fe70.png&w=384&q=100'
                />
            </div>
            <ReferencesCard/>
        </div>
    );
};

export default MainPage;
