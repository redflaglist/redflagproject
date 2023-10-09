function check(checked = true) {
          const checkboxes = document.querySelectorAll('input[name="redflag"]');
          checkboxes.forEach((checkbox) => {
               checkbox.checked = checked;
          });
     }
          
function checkAll() {
          check();
          this.onclick = uncheckAll;
     }  

function uncheckAll() {
          check(false);
          this.onclick = checkAll;
     }
     
const btn = document.querySelector("#btn");
btn.onclick = checkAll;

function results() {
     var text1 = document.getElementById("cb1").style.display="none";
     var text2 = document.getElementById("cb2").style.display="none";
     var text3 = document.getElementById("cb3").style.display="none";
     var text4 = document.getElementById("intro").style.display="none";
     var text5 = document.getElementById("p1").style.display="none";
          var text6 = document.getElementById("button").style.display="none";

     var text7 = document.getElementById("results").style.display="Block";
     i = 0;
     var flag1 = document.getElementById('1');
     var flag2 = document.getElementById('2');
     var flag3 = document.getElementById('3');
     var flag4 = document.getElementById('4');
     var flag5 = document.getElementById('5');
     var flag6 = document.getElementById('6');
     var flag7 = document.getElementById('7');
     var flag8 = document.getElementById('8');
     var flag9 = document.getElementById('9');
     var flag10 = document.getElementById('10');
     var flag11 = document.getElementById('11');
     var flag12 = document.getElementById('12');
     var flag13 = document.getElementById('13');
     var flag14 = document.getElementById('14');
     var flag15 = document.getElementById('15');
     var flag16 = document.getElementById('16');
     var flag17 = document.getElementById('17');
     var flag18 = document.getElementById('18');
     var flag19 = document.getElementById('19');
     var flag20 = document.getElementById('20');
     var flag21 = document.getElementById('21');
     var flag22 = document.getElementById('22');
     var flag23 = document.getElementById('23');
     var flag25 = document.getElementById('25');
     var flag27 = document.getElementById('27');
     var flag28 = document.getElementById('28');
     var flag29 = document.getElementById('29');
     var flag30 = document.getElementById('30');
     var flag31 = document.getElementById('31');
     var flag32 = document.getElementById('32');
     var flag33 = document.getElementById('33');
     var flag34 = document.getElementById('34');
     var flag35 = document.getElementById('35');
     var flag36 = document.getElementById('36');
     var flag37 = document.getElementById('37');
     var flag38 = document.getElementById('38');
     var flag39 = document.getElementById('39');
     var flag40 = document.getElementById('40');
     var flag41 = document.getElementById('41');
     var flag42 = document.getElementById('42');
     var flag43 = document.getElementById('43');
     var flag44 = document.getElementById('44');
     var flag47 = document.getElementById('47');
     var flag48 = document.getElementById('48');
     var flag49 = document.getElementById('49');
     var flag50 = document.getElementById('50');
     var flag51 = document.getElementById('51');
     var flag52 = document.getElementById('52');
     var flag53 = document.getElementById('53');
     var flag54 = document.getElementById('54');
     var flag55 = document.getElementById('55');
     var flag56 = document.getElementById('56');
     var flag57 = document.getElementById('57');
     var flag58 = document.getElementById('58');
     var flag59 = document.getElementById('59');
     var flag60 = document.getElementById('60');
     var flag61 = document.getElementById('61');
     var flag62 = document.getElementById('62');
     var flag64 = document.getElementById('64');
     var flag65 = document.getElementById('65');
     var flag66 = document.getElementById('66');
     var flag67 = document.getElementById('67');
     var flag68 = document.getElementById('68');
          var flag69 = document.getElementById('69');
          var flag70 = document.getElementById('70');

     if(flag1.checked) { /* says slurs*/
          i += 65;
     }
     if(flag2.checked) { /*doesn't like your friends*/
          i += 18;
     }
     if(flag3.checked) { /*whines when you don't have sex with them*/
          i += 64;
     }
     if(flag4.checked) { /*pressures you to have sex wo protection*/
          i += 64;
     }
     if(flag5.checked) { /*addicted to drugs or alc*/
          i += 23;
     }
     if(flag6.checked) { /*mentally ill and no coping mechanisms*/
          i += 19;
     }
     if(flag7.checked) { /*a-political*/
          i += 18;
     }
     if(flag8.checked) { /*past cheater*/
          i += 20;
     }
     if(flag9.checked) { /*gaslighting*/
          i += 23;
     }
     if(flag10.checked) { /*friends hate them*/
          i += 30;
     }
     if(flag11.checked) { /*liar*/
          i += 24;
     }
     if(flag12.checked) { /*take no interest in your interests*/
          i += 26;
     }
     if(flag13.checked) { /*you don't want to be like them*/
          i += 28;
     }
     if(flag14.checked) { /*punches walls*/
          i += 27;
     }
     if(flag15.checked) { /*messy/don't clean*/
          i += 21;
     }
     if(flag16.checked) { /*rude to waiters*/
          i += 29;
     }
     if(flag17.checked) { /*boring*/
          i += 12;
     }
     if(flag18.checked) { /*accuses you of cheating all the time*/
          i += 24;
     }
     if(flag19.checked) { /*makes you cry a lot*/
          i += 16;
     }
     if(flag20.checked) { /*no cum*/
          i += 12;
     }
     if(flag21.checked) { /*no effort in relationship*/
          i += 22;
     }
     if(flag22.checked) { /*socially liberal fiscally conservative*/
          i += 17;
     }
     if(flag23.checked) { /*no ambition*/
          i += 21;
     }
     if(flag25.checked) { /*friend group has bad vibes*/
          i += 15;
     }
     if(flag27.checked) { /*terrible taste in food*/
          i += 8;
     }
     if(flag28.checked) { /*tell you what to wear*/
          i += 18;
     }
     if(flag29.checked) { /*not an active listener*/
          i += 14;
     }
     if(flag30.checked) { /*gold star for not cheating*/
          i += 12;
     }
     if(flag31.checked) { /*won't season food*/
          i += 9;
     }
     if(flag32.checked) { /*calls mom mommy*/
          i += 11;
     }
     if(flag33.checked) { /*commitment issues*/
          i += 15;
     }
     if(flag34.checked) { /*affirmative action*/
          i += 18;
     }
     if(flag35.checked) {  /*no self confidence*/
          i += 16;
     }
     if(flag36.checked) { /*pretentious*/
          i += 15;
     }
     if(flag37.checked) { /*reagan Bush 84 shirt*/
          i += 9;
     }
     if(flag38.checked) { /*no emtional intelligence*/
          i += 12;
     }
     if(flag39.checked) { /*said they loved you 2 weeks in*/
          i += 13;
     }
     if(flag40.checked) { /*never gives you compliments*/
          i += 16;
     }
     if(flag41.checked) { /*plays the victim*/
          i += 17;
     }
     if(flag42.checked) { /*finance bro*/
          i += 7;
     }
     if(flag43.checked) { /*neg comments on appearance*/
          i += 23;
     }
     if(flag44.checked) {  /*doesnt listen to women artists*/
          i += 9;
     }
     if(flag47.checked) { /*flip flops*/
          i += 7;
     }
     if(flag48.checked) { /*lifelong goals*/
          i += 18;
     }
     if(flag49.checked) { /*wont introduce to their friends*/
          i += 20;
     }
     if(flag50.checked) { /*peaked in hs*/
          i += 8;
     }
     if(flag51.checked) { /*3:1 shampoo*/
          i += 5;
     }
     if(flag52.checked) { /*wears camo casually */
          i += 3;
     }
     if(flag53.checked) { /*idolizes elon musk*/
          i += 16;
     }
     if(flag54.checked) { /*thinks the red flag list is stupid*/
          i += 10;
     }
     if(flag55.checked) { /*liberal is only good quality*/
          i += 7;
     }
     if(flag56.checked) { /*whole milk*/
          i += 3;
     }
     if(flag57.checked) { /*overly agressive when watching sports*/
          i += 8;
     }
     if(flag58.checked) { /*no comforter*/
          i += 6;
     }
     if(flag59.checked) { /*calls women "females"*/
          i += 11;
     }
     if(flag60.checked) { /*only listens to EDM*/
          i += 5;
     }
     if(flag61.checked) { /*no drip*/
          i += 4;
     }
     if(flag62.checked) { /*only wants to be little spoon*/
          i += 5;
     }
     if(flag64.checked) { /*video games*/
          i += 9;
     }
     if(flag65.checked) { /*from florida*/
          i += 2;
     }
     if(flag66.checked) { /*hates cats*/
          i += 12;
     }
     if(flag67.checked) { /*wants gold star for respecting women*/
          i += 10;
     }
     if(flag68.checked) { /*only child*/
          i += 1;
     }
          if(flag69.checked) { /*fetishization*/
          i += 29;
     }
          if(flag70.checked) { /*makes fun of other cultures food*/
          i += 18;
     }
     /*Adding Results Header, general results & description*/

     if (i < 25) {
          var result1 = document.getElementById("result1").style.display = "block";
     }
     else if (i<50) {
          var result2 = document.getElementById("result2").style.display ="block";
     }
     else if (i<100) {
          var result3 = document.getElementById("result3").style.display ="block";
     }
     else if (i<=125) {
          var result4 = document.getElementById("result4").style.display ="block";
     }
     else if (i<10000) {
          var result5 = document.getElementById("result5").style.display ="block";
     }
     var transition = document.getElementById("transition").style.display="block";
     var checkBox1 = document.getElementById("1");
     var header1= document.getElementById("rfh1");
     var text = document.getElementById("rf1");
     if (checkBox1.checked ==true) {
          text.style.display = "block";
          header1.style.display= "block";
     } else {
          text.style.display = "none";
     }

     var checkBox2 = document.getElementById("2");
     var header2= document.getElementById("rfh2");
     var text2 = document.getElementById("rf2");
     if (checkBox2.checked ==true) {
          text2.style.display = "block";
          header2.style.display= "block";
     } else {
          text2.style.display = "none";
     }

     var checkBox3 = document.getElementById("3");
     var header3= document.getElementById("rfh3");
     var text3 = document.getElementById("rf3");
     if (checkBox3.checked ==true) {
          text3.style.display = "block";
          header3.style.display= "block";
     } else {
          text3.style.display = "none";
     }

     var checkBox4 = document.getElementById("4");
     var header4= document.getElementById("rfh4");
     var text4 = document.getElementById("rf4");
     if (checkBox4.checked ==true) {
          text4.style.display = "block";
          header4.style.display= "block";
     } else {
          text4.style.display = "none";
     }

     var checkBox5 = document.getElementById("5");
     var header5= document.getElementById("rfh5");
     var text5 = document.getElementById("rf5");
     if (checkBox5.checked ==true) {
          text5.style.display = "block";
          header5.style.display= "block";
     } else {
          text5.style.display = "none";
     }

     var checkBox6 = document.getElementById("6");
     var header6= document.getElementById("rfh6");
     var text6 = document.getElementById("rf6");
     if (checkBox6.checked ==true) {
          text6.style.display = "block";
          header6.style.display= "block";
     } else {
          text6.style.display = "none";
     }

     var checkBox7 = document.getElementById("7");
     var header7= document.getElementById("rfh7");
     var text7 = document.getElementById("rf7");
     if (checkBox7.checked ==true) {
          text7.style.display = "block";
          header7.style.display= "block";
     } else {
          text7.style.display = "none";
     }

     var checkBox8 = document.getElementById("8");
     var header8= document.getElementById("rfh8");
     var text8 = document.getElementById("rf8");
     if (checkBox8.checked ==true) {
          text8.style.display = "block";
          header8.style.display= "block";
     } else {
          text8.style.display = "none";
     }

     var checkBox9 = document.getElementById("9");
     var header9= document.getElementById("rfh9");
     var text9 = document.getElementById("rf9");
     if (checkBox9.checked ==true) {
          text9.style.display = "block";
          header9.style.display= "block";
     } else {
          text9.style.display = "none";
     }

     var checkBox10 = document.getElementById("10");
     var header10= document.getElementById("rfh10");
     var text10 = document.getElementById("rf10");
     if (checkBox10.checked ==true) {
          text10.style.display = "block";
          header10.style.display= "block";
     } else {
          text10.style.display = "none";
     }

     var checkBox11 = document.getElementById("11");
     var header11= document.getElementById("rfh11");
     var text11 = document.getElementById("rf11");
     if (checkBox11.checked ==true) {
          text11.style.display = "block";
          header11.style.display= "block";
     } else {
          text11.style.display = "none";
     }

     var checkBox12 = document.getElementById("12");
     var header12= document.getElementById("rfh12");
     var text12 = document.getElementById("rf12");
     if (checkBox12.checked ==true) {
          text12.style.display = "block";
          header12.style.display= "block";
     } else {
          text12.style.display = "none";
     }

     var checkBox23 = document.getElementById("23");
     var header23= document.getElementById("rfh23");
     var text23 = document.getElementById("rf23");
     if (checkBox23.checked ==true) {
          text23.style.display = "block";
          header23.style.display= "block";
     } else {
          text23.style.display = "none";
     }

     var checkBox25 = document.getElementById("25");
     var header25= document.getElementById("rfh25");
     var text25 = document.getElementById("rf25");
     if (checkBox25.checked ==true) {
          text25.style.display = "block";
          header25.style.display= "block";
     } else {
          text25.style.display = "none";
     }

     var checkBox62 = document.getElementById("62");
     var header62= document.getElementById("rfh62");
     var text62 = document.getElementById("rf62");
     if (checkBox62.checked ==true) {
          text62.style.display = "block";
          header62.style.display= "block";
     } else {
          text62.style.display = "none";
     }

     var checkBox21 = document.getElementById("21");
     var header21= document.getElementById("rfh21");
     var text21 = document.getElementById("rf21");
     if (checkBox21.checked ==true) {
          text21.style.display = "block";
          header21.style.display= "block";
     } else {
          text21.style.display = "none";
     }

     var checkBox31 = document.getElementById("31");
     var header31= document.getElementById("rfh31");
     var text31 = document.getElementById("rf31");
     if (checkBox31.checked ==true) {
          text31.style.display = "block";
          header31.style.display= "block";
     } else {
          text31.style.display = "none";
     }
          var checkBox69 = document.getElementById("69");
     var header69= document.getElementById("rfh69");
     var text69 = document.getElementById("rf69");
     if (checkBox69.checked ==true) {
          text69.style.display = "block";
          header69.style.display= "block";
     } else {
          text69.style.display = "none";
     }
          var checkBox70 = document.getElementById("70");
     var header70= document.getElementById("rfh70");
     var text70 = document.getElementById("rf70");
     if (checkBox70.checked ==true) {
          text70.style.display = "block";
          header70.style.display= "block";
     } else {
          text70.style.display = "none";
     }

     /*next column*/

      var checkBox27 = document.getElementById("27");
     var header27= document.getElementById("rfh27");
     var text27 = document.getElementById("rf27");
     if (checkBox27.checked ==true) {
          text27.style.display = "block";
          header27.style.display= "block";
     } else {
          text27.style.display = "none";
     }

     var checkBox28 = document.getElementById("28");
     var header28= document.getElementById("rfh28");
     var text28 = document.getElementById("rf28");
     if (checkBox28.checked ==true) {
          text28.style.display = "block";
          header28.style.display= "block";
     } else {
          text28.style.display = "none";
     }

     var checkBox29 = document.getElementById("29");
     var header29= document.getElementById("rfh29");
     var text29 = document.getElementById("rf29");
     if (checkBox29.checked ==true) {
          text29.style.display = "block";
          header29.style.display= "block";
     } else {
          text29.style.display = "none";
     }

     var checkBox30 = document.getElementById("30");
     var header30= document.getElementById("rfh30");
     var text30 = document.getElementById("rf30");
     if (checkBox30.checked ==true) {
          text30.style.display = "block";
          header30.style.display= "block";
     } else {
          text30.style.display = "none";
     }

     var checkBox32 = document.getElementById("32");
     var header32= document.getElementById("rfh32");
     var text32 = document.getElementById("rf32");
     if (checkBox32.checked ==true) {
          text32.style.display = "block";
          header32.style.display= "block";
     } else {
          text32.style.display = "none";
     }

     var checkBox33 = document.getElementById("33");
     var header33= document.getElementById("rfh33");
     var text33 = document.getElementById("rf33");
     if (checkBox33.checked ==true) {
          text33.style.display = "block";
          header33.style.display= "block";
     } else {
          text33.style.display = "none";
     }

     var checkBox34 = document.getElementById("34");
     var header34= document.getElementById("rfh34");
     var text34 = document.getElementById("rf34");
     if (checkBox34.checked ==true) {
          text34.style.display = "block";
          header34.style.display= "block";
     } else {
          text34.style.display = "none";
     }

     var checkBox35 = document.getElementById("35");
     var header35= document.getElementById("rfh35");
     var text35 = document.getElementById("rf35");
     if (checkBox35.checked ==true) {
          text35.style.display = "block";
          header35.style.display= "block";
     } else {
          text35.style.display = "none";
     }

     var checkBox36 = document.getElementById("36");
     var header36= document.getElementById("rfh36");
     var text36 = document.getElementById("rf36");
     if (checkBox36.checked ==true) {
          text36.style.display = "block";
          header36.style.display= "block";
     } else {
          text36.style.display = "none";
     }

     var checkBox37 = document.getElementById("37");
     var header37= document.getElementById("rfh37");
     var text37 = document.getElementById("rf37");
     if (checkBox37.checked ==true) {
          text37.style.display = "block";
          header37.style.display= "block";
     } else {
          text37.style.display = "none";
     }

     var checkBox13 = document.getElementById("13");
     var header13= document.getElementById("rfh13");
     var text13 = document.getElementById("rf13");
     if (checkBox13.checked ==true) {
          text13.style.display = "block";
          header13.style.display= "block";
     } else {
          text13.style.display = "none";
     }

     var checkBox14 = document.getElementById("14");
     var header14= document.getElementById("rfh14");
     var text14 = document.getElementById("rf14");
     if (checkBox14.checked ==true) {
          text14.style.display = "block";
          header14.style.display= "block";
     } else {
          text14.style.display = "none";
     }

     var checkBox15 = document.getElementById("15");
     var header15= document.getElementById("rfh15");
     var text15 = document.getElementById("rf15");
     if (checkBox15.checked ==true) {
          text15.style.display = "block";
          header15.style.display= "block";
     } else {
          text15.style.display = "none";
     }

     var checkBox16 = document.getElementById("16");
     var header16= document.getElementById("rfh16");
     var text16 = document.getElementById("rf16");
     if (checkBox16.checked ==true) {
          text16.style.display = "block";
          header16.style.display= "block";
     } else {
          text16.style.display = "none";
     }

     var checkBox17 = document.getElementById("17");
     var header17= document.getElementById("rfh17");
     var text17 = document.getElementById("rf17");
     if (checkBox17.checked ==true) {
          text17.style.display = "block";
          header17.style.display= "block";
     } else {
          text17.style.display = "none";
     }

     var checkBox18 = document.getElementById("18");
     var header18= document.getElementById("rfh18");
     var text18 = document.getElementById("rf18");
     if (checkBox18.checked ==true) {
          text18.style.display = "block";
          header18.style.display= "block";
     } else {
          text18.style.display = "none";
     }

     var checkBox19 = document.getElementById("19");
     var header19= document.getElementById("rfh19");
     var text19 = document.getElementById("rf19");
     if (checkBox19.checked ==true) {
          text19.style.display = "block";
          header19.style.display= "block";
     } else {
          text19.style.display = "none";
     }

     var checkBox20 = document.getElementById("20");
     var header20= document.getElementById("rfh20");
     var text20 = document.getElementById("rf20");
     if (checkBox20.checked ==true) {
          text20.style.display = "block";
          header20.style.display= "block";
     } else {
          text20.style.display = "none";
     }

     /*next column*/

     var checkBox22 = document.getElementById("22");
     var header22= document.getElementById("rfh22");
     var text22 = document.getElementById("rf22");
     if (checkBox22.checked ==true) {
          text22.style.display = "block";
          header22.style.display= "block";
     } else {
          text22.style.display = "none";
     }

    
     var checkBox38 = document.getElementById("38");
     var header38= document.getElementById("rfh38");
     var text38 = document.getElementById("rf38");
     if (checkBox38.checked ==true) {
          text38.style.display = "block";
          header38.style.display= "block";
     } else {
          text38.style.display = "none";
     }

     var checkBox39 = document.getElementById("39");
     var header39= document.getElementById("rfh39");
     var text39 = document.getElementById("rf39");
     if (checkBox39.checked ==true) {
          text39.style.display = "block";
          header39.style.display= "block";
     } else {
          text39.style.display = "none";
     }

     var checkBox40 = document.getElementById("40");
     var header40= document.getElementById("rfh40");
     var text40 = document.getElementById("rf40");
     if (checkBox40.checked ==true) {
          text40.style.display = "block";
          header40.style.display= "block";
     } else {
          text40.style.display = "none";
     }

     var checkBox41 = document.getElementById("41");
     var header41= document.getElementById("rfh41");
     var text41 = document.getElementById("rf41");
     if (checkBox41.checked ==true) {
          text41.style.display = "block";
          header41.style.display= "block";
     } else {
          text41.style.display = "none";
     }

     var checkBox42 = document.getElementById("42");
     var header42= document.getElementById("rfh42");
     var text42 = document.getElementById("rf42");
     if (checkBox42.checked ==true) {
          text42.style.display = "block";
          header42.style.display= "block";
     } else {
          text42.style.display = "none";
     }

     var checkBox43 = document.getElementById("43");
     var header43= document.getElementById("rfh43");
     var text43 = document.getElementById("rf43");
     if (checkBox43.checked ==true) {
          text43.style.display = "block";
          header43.style.display= "block";
     } else {
          text43.style.display = "none";
     }

     var checkBox44 = document.getElementById("44");
     var header44= document.getElementById("rfh44");
     var text44 = document.getElementById("rf44");
     if (checkBox44.checked ==true) {
          text44.style.display = "block";
          header44.style.display= "block";
     } else {
          text44.style.display = "none";
     }

     var checkBox47 = document.getElementById("47");
     var header47= document.getElementById("rfh47");
     var text47 = document.getElementById("rf47");
     if (checkBox47.checked ==true) {
          text47.style.display = "block";
          header47.style.display= "block";
     } else {
          text47.style.display = "none";
     }

     var checkBox48 = document.getElementById("48");
     var header48= document.getElementById("rfh48");
     var text48 = document.getElementById("rf48");
     if (checkBox48.checked ==true) {
          text48.style.display = "block";
          header48.style.display= "block";
     } else {
          text48.style.display = "none";
     }

     var checkBox49 = document.getElementById("49");
     var header49= document.getElementById("rfh49");
     var text49 = document.getElementById("rf49");
     if (checkBox49.checked ==true) {
          text49.style.display = "block";
          header49.style.display= "block";
     } else {
          text49.style.display = "none";
     }

     var checkBox50 = document.getElementById("50");
     var header50= document.getElementById("rfh50");
     var text50 = document.getElementById("rf50");
     if (checkBox50.checked ==true) {
          text50.style.display = "block";
          header50.style.display= "block";
     } else {
          text50.style.display = "none";
     }

     var checkBox51 = document.getElementById("51");
     var header51= document.getElementById("rfh51");
     var text51 = document.getElementById("rf51");
     if (checkBox51.checked ==true) {
          text51.style.display = "block";
          header51.style.display= "block";
     } else {
          text51.style.display = "none";
     }

     var checkBox52 = document.getElementById("52");
     var header52= document.getElementById("rfh52");
     var text52 = document.getElementById("rf52");
     if (checkBox52.checked ==true) {
          text52.style.display = "block";
          header52.style.display= "block";
     } else {
          text52.style.display = "none";
     }

     var checkBox53 = document.getElementById("53");
     var header53= document.getElementById("rfh53");
     var text53 = document.getElementById("rf53");
     if (checkBox53.checked ==true) {
          text53.style.display = "block";
          header53.style.display= "block";
     } else {
          text53.style.display = "none";
     }

     var checkBox54 = document.getElementById("54");
     var header54= document.getElementById("rfh54");
     var text54 = document.getElementById("rf54");
     if (checkBox54.checked ==true) {
          text54.style.display = "block";
          header54.style.display= "block";
     } else {
          text54.style.display = "none";
     }

     var checkBox55 = document.getElementById("55");
     var header55= document.getElementById("rfh55");
     var text55 = document.getElementById("rf55");
     if (checkBox55.checked ==true) {
          text55.style.display = "block";
          header55.style.display= "block";
     } else {
          text55.style.display = "none";
     }

     var checkBox56 = document.getElementById("56");
     var header56= document.getElementById("rfh56");
     var text56 = document.getElementById("rf56");
     if (checkBox56.checked ==true) {
          text56.style.display = "block";
          header56.style.display= "block";
     } else {
          text56.style.display = "none";
     }

     var checkBox57 = document.getElementById("57");
     var header57= document.getElementById("rfh57");
     var text57 = document.getElementById("rf57");
     if (checkBox57.checked ==true) {
          text57.style.display = "block";
          header57.style.display= "block";
     } else {
          text57.style.display = "none";
     }

     var checkBox58 = document.getElementById("58");
     var header58= document.getElementById("rfh58");
     var text58 = document.getElementById("rf58");
     if (checkBox58.checked ==true) {
          text58.style.display = "block";
          header58.style.display= "block";
     } else {
          text58.style.display = "none";
     }

     var checkBox59 = document.getElementById("59");
     var header59= document.getElementById("rfh59");
     var text59 = document.getElementById("rf59");
     if (checkBox59.checked ==true) {
          text59.style.display = "block";
          header59.style.display= "block";
     } else {
          text59.style.display = "none";
     }

     var checkBox60 = document.getElementById("60");
     var header60= document.getElementById("rfh60");
     var text60 = document.getElementById("rf60");
     if (checkBox60.checked ==true) {
          text60.style.display = "block";
          header60.style.display= "block";
     } else {
          text60.style.display = "none";
     }

     var checkBox61 = document.getElementById("61");
     var header61= document.getElementById("rfh61");
     var text61 = document.getElementById("rf61");
     if (checkBox61.checked ==true) {
          text61.style.display = "block";
          header61.style.display= "block";
     } else {
          text61.style.display = "none";
     }


     var checkBox64 = document.getElementById("64");
     var header64= document.getElementById("rfh64");
     var text64 = document.getElementById("rf64");
     if (checkBox64.checked ==true) {
          text64.style.display = "block";
          header64.style.display= "block";
     } else {
          text64.style.display = "none";
     }

     var checkBox65 = document.getElementById("65");
     var header65= document.getElementById("rfh65");
     var text65 = document.getElementById("rf65");
     if (checkBox65.checked ==true) {
          text65.style.display = "block";
          header65.style.display= "block";
     } else {
          text65.style.display = "none";
     }

     var checkBox66 = document.getElementById("66");
     var header66= document.getElementById("rfh66");
     var text66 = document.getElementById("rf66");
     if (checkBox66.checked ==true) {
          text66.style.display = "block";
          header66.style.display= "block";
     } else {
          text66.style.display = "none";
     }

     var checkBox67 = document.getElementById("67");
     var header67= document.getElementById("rfh67");
     var text67 = document.getElementById("rf67");
     if (checkBox67.checked ==true) {
          text67.style.display = "block";
          header67.style.display= "block";
     } else {
          text67.style.display = "none";
     }

     var checkBox68 = document.getElementById("68");
     var header68= document.getElementById("rfh68");
     var text68 = document.getElementById("rf68");
     if (checkBox68.checked ==true) {
          text68.style.display = "block";
          header68.style.display= "block";
     } else {
          text68.style.display = "none";
     }
}

     












