import React, { useState } from 'react';
import './index.css'

const ArmFemaleNames = ["AGHAVNI ( dove)","ALTOON ( gold)","ANAHID ( pure","ANKINE ( valuable)","ANOUSH ( sweet)","AREV ( sun)","ARMAVENE ( palm-tree)","ARMENOUHEE ( from Armenia)","ARMENOUHI ( from Armenia)","AROUSEAK ( morning star)","ARPI ( sun)","ARUSIAG ( morning star)","ARUSIAK ( morning star)","ASDGHIG ( Venus)","ASTGHIK ( Venus)","AZNIV ( noble)","BADASHAN ( answer)","BAGMASTI ( consort of the deity Haldi)","BERJOUHI ( from Berjou (?))","DZAGHIG ( flower)","DZIADZAN ( rainbow)","GADAR ( summit)","GAYANE ( the name of a saint; (melody?))","HAIGOUHI ( father's girl)","HALTOON ( gold (?))","HASMIG ( jasmine)","HATOON ( lady)","HEGHNAR ( father's daughter (?))","HEYGOUHEE ( father's girl)","HUNAZANT ( obedient)","KEGHANOUSH ( from the fortress of Kegha (?))","KNARIG ( (?))","KOHAR ( jewel)","LOOSIG ( little light)","LOOSINTAK ( crown of light)","LOUSAPER ( light-bringer)","LOUSNTAK ( crown of light)","LUCINE ( light)","LYUDMILA ( people's love)","MAKROUHI ( from the Makrou?)","MANISHAK ( violet flower)","MANNIG ( (?))","MARGARID ( pearl)","MEGHRANOUSH ( honey-sweet)","NAIRI ( Armenian)","NAZANI ( delicate)","NOUSHIG ( little almond)","NOUVART ( little rose)","OVSANNA ( deliver us","PERGROUHI ( joy)","POURASDAN ( garden of flowers)","PRAPION ( laurel","SERPOUHI ( holiness)","SERPUHI ( holiness)","SEVAN ( Black Van)","SHNORHIG ( (?))","SHOGHAGAT ( rays from above)","SHOUSHAN ( lily)","SHUSHAN ( lily)","SIRAN ( beautiful)","SIROUN ( lovely)","SIRPUHI ( holiness)","SIRVART ( beautiful rose)","SIRVAT ( beautiful rose)","SOSI ( plane-tree)","SRPOUHI ( holiness)","SURPOOHE ( holiness)","TAKOOHE ( queen)","TAKOUHI ( queen)","TANGAKIN ( precious)","TEGHTSANIG ( canary bird)","TEGHTSUN ( yellow-haired)","TETER ( butterfly)","VARTANOUSH ( rose-sweet)","VARTENI ( rose-tree)","VARTER ( rose)","VARTIG ( little rose)","VARTITER ( rose-leaf or rose-petal)","VARTOUHI ( rose woman)","VOSGETEL ( gold-thread)","VOSGI ( gold)","VOSHKIE ( gold)","YEGHNIG ( fawn)","YERCHANIG ( fortunate","YEVA ( Eve; life)","ZABEL ( God is my oath or oath of Baal)","ZANAZAN ( distinct","ZIAZAN ( rainbow)","ZMRUKHT ( emerald)","ZVART ( black (?); sword (?))"];


function GenArmFemaleName() {
    const [femaleName, newName] = useState('Aghavni');


    return (
        <div id="female-name-container">
            <button id="female-name-button" onClick={() => newName(ArmFemaleNames[Math.floor(Math.random()*ArmFemaleNames.length)])}>
                Female Name
            </button>
            <h2>{femaleName}</h2>
        </div>
    );
}

export default GenArmFemaleName