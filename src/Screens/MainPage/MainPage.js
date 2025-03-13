import React, { useState } from "react";
import './MainPage.css';
import { Button } from "@mui/material";
import TutorialCard from "../../Components/TutorialCard/TutorialCard";
import EventsCard from "../../Components/EventsCard";
import JobPostingCard from "../../Components/JobPostingsCard";

const MainPage = () => {

    const [eventsText,setEventsText]= useState("Uzman eğitmenler ile farklı yazılım dillerinde eğitimler alıp, projeler üzerinde çalışarak gerçek dünya tecrübesi edin, kariyerinde hızla yüksel.");

    const handleEvents = (eventType) =>{
        switch(eventType){
        case "Bootcamp":
            setEventsText("Uzman eğitmenler ile farklı yazılım dillerinde eğitimler alıp, projeler üzerinde <br/> çalışarak gerçek dünya tecrübesi edin, kariyerinde hızla yüksel.")
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
    }

    

    return (
        <div className="container">
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row',  backgroundColor:'#fafafa',
                    justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ color: '#47c26d', marginRight: '5px', fontSize: '30px' }}>Techcarrer.net ile</p>
                    <p style={{ fontSize: '30px' }}>teknoloji <br /> kariyerinde hep ileriye</p>
                    <img
                        src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Fcall-to-actions%2Fhome%2Fcta-img.png&w=640&q=75"
                        alt="computer"
                        style={{ height: '40%' }}
                    />
                </div>
            </div>

            
            <div>
                <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Etkinliklerimiz</h1>
                <div style={{ display: 'flex', flexDirection: 'row',
                    justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant="outlined" 
                    style={{ margin: '5px' }} onClick={()=>handleEvents('Bootcamp')}>Bootcamp</Button>
                    <Button variant="outlined" onClick={()=>handleEvents('Hackathon')} style={{ margin: '5px' }}>Hackathon</Button>
                    <Button variant="outlined" style={{ margin: '5px' }}>Hiring Challenge</Button>
                </div>
                <p style={{ whiteSpace: 'pre-line', fontSize: '18px', lineHeight: '1.6' }}>
                 {eventsText}
                </p>
                <Button style={{alignItems:'center', justifyContent:'center'}}>Hemen Başvur</Button>
                <h2>Başvuruya Açık Etkinlikler</h2>
                <div style={{flexDirection:'row', display:'flex', justifyContent:'space-around'}}>
                    <EventsCard imageUrl={'https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FDokuz_Eyluel_Ueniversitesi_Detech_25_54b99ffc58%2FDokuz_Eyluel_Ueniversitesi_Detech_25_54b99ffc58.png&w=384&q=75'}
                    title={"DETECH'25"} description={'Teknoloji ile Dünyayı Değiştir'}/>
                    <EventsCard imageUrl={'https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FSwift_Craft_336x180_080190bd54%2FSwift_Craft_336x180_080190bd54.png&w=384&q=75'}
                    title={"SwiftCraft: IOS Development Bootcamp"}/>
                    <EventsCard imageUrl={'https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1200x628_41_4028b4cf4f%2F1200x628_41_4028b4cf4f.png&w=384&q=75'}
                    title={'Experian Young Talent Bootcamp'} description={'Ücretsiz Öğren'} />

                </div>
                <h2>İş İlanları</h2>
                <div style={{flexDirection:'row', display:'flex'}}>
                    <JobPostingCard 
                    image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fresim_21ae22cb29%2Fresim_21ae22cb29.jpg&w=64&q=100'
                    title='Data Engineer'
                    company={'Cherry'}/>
                    
                </div>
                <h2>Eğitimlerimiz</h2>
                <div style={{flexDirection:'row', display:"flex", width:'100%'}}>
                    <TutorialCard title={'Temel Seviyede React.js Eğitimi'} mentor='Hamit Mızrak'/>
                    <TutorialCard title={'Uygulamalarla SQL Eğitimi'}/>
                    <TutorialCard />

                </div>
                <Button>Tümünü Gör </Button>
                <h2 >Testlerimiz</h2>
                <div style={{flexDirection:'row',display:'flex', justifyContent:'space-around'}}>
                    <TutorialCard 
                    title='C# Teknik Test (Başlangıç Seviye)'
                    image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FTestler_kapak_goersel_boyutu_7_2d0f5d4fc2%2FTestler_kapak_goersel_boyutu_7_2d0f5d4fc2.png&w=384&q=75'/>
                    <TutorialCard
                    title='.NET Teknik Test (Başlangıç Seviye)'
                    image='https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FTestler_kapak_goersel_boyutu_9_e9f7be4383%2FTestler_kapak_goersel_boyutu_9_e9f7be4383.png&w=384&q=75'/>
                </div>
                
            </div>
        </div>
    );
};

export default MainPage;
