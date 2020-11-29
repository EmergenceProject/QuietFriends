function preload() {
  l_images_leaf = [];
  for (let idx_leaf=0; idx_leaf< l_name_leafs.length; idx_leaf++) {
    img = loadImage('images/'+l_name_leafs[idx_leaf]);
    append(l_images_leaf, img);
  }
  back = loadImage('images/Dummy_road.svg');
}

let l_name_leafs = ["norway_maple.png", "norway_maple.png", "norway_maple.png","norway_maple.png", "norway_maple.png", "norway_maple.png","norway_maple.png", "norway_maple.png", "norway_maple.png","norway_maple.png",
                    "norway_maple.png", "norway_maple.png", "norway_maple.png","norway_maple.png", "norway_maple.png", "norway_maple.png","norway_maple.png", "norway_maple.png", "norway_maple.png","norway_maple.png",
                    "norway_maple.png", "norway_maple.png", "norway_maple.png","norway_maple.png", "norway_maple.png", "norway_maple.png","norway_maple.png", "norway_maple.png", "norway_maple.png","norway_maple.png", "norway_maple.png", "norway_maple.png","norway_maple.png","norway_maple.png"];
let l_proper_name_leafs = ["Norway maple", "Norway maple", "Norway maple", "Unknown Species","Unknown Species","Unknown Species","Unknown Species","Unknown Species","Unknown Species","Unknown Species",
                            "Norway maple", "Norway maple", "Norway maple", "Unknown Species","Unknown Species","Unknown Species","Unknown Species","Unknown Species","Unknown Species","Unknown Species",
                          "Norway maple", "Norway maple", "Norway maple", "Unknown Species","Unknown Species","Unknown Species","Unknown Species","Unknown Species","Unknown Species","Unknown Species",
                        "Norway maple", "Norway maple", "Norway maple", "Norway maple"];
var realWidth;
var x_pos = 0;
var y_pos = 0;

trees_t  = [[737,655,1,2,false],
[716,640,2,2,false],
[658,653,3,2,false],
[639,634,4,1,false],
[630,615,4,1,false],
[608,630,4,1,false],
[623,638,4,1,false],
[597,608,4,1,false],
[593,596,4,1,false],
[587,593,4,1,false],
[578,602,4,1,false],
[578,612,4,1,false],
[574,591,4,1,false],
[570,604,4,1,false],
[566,590,4,1,false],
[560,604,4,1,false],
[557,584,4,1,false],
[550,599,4,1,false],
[547,588,4,1,false],
[562,620,4,1,false],
[549,617,4,1,false],
[559,595,5,2,false],
[488,560,4,1,false],
[472,571,4,1,false],
[480,573,4,1,false],
[475,575,4,1,false],
[468,577,4,1,false],
[472,582,4,1,false],
[479,581,4,1,false],
[490,582,4,1,false],
[495,586,4,1,false],
[501,589,4,1,false],
[506,592,4,1,false],
[512,595,4,1,false],
[517,600,4,1,false],
[522,602,4,1,false],
[526,605,4,1,false],
[530,598,4,1,false],
[535,592,4,1,false],
[540,587,4,1,false],
[502,610,6,3,false],
[493,604,7,1,false],
[492,613,7,1,false],
[485,613,7,1,false],
[479,613,7,1,false],
[483,604,7,1,false],
[469,592,4,1,false],
[476,597,4,1,false],
[468,598,4,1,false],
[468,603,4,1,false],
[444,560,8,1,false],
[453,564,8,1,false],
[449,577,8,1,false],
[439,564,8,1,false],
[435,570,8,1,false],
[437,579,8,1,false],
[420,524,8,1,false],
[434,535,8,1,false],
[419,532,8,1,false],
[414,536,8,1,false],
[456,551,6,1,false],
[411,516,9,1,false],
[404,539,9,1,false],
[398,530,8,1,false],
[386,516,9,1,false],
[398,512,10,1,false],
[378,510,10,1,false],
[374,517,10,1,false],
[374,502,10,1,false],
[370,475,10,1,false],
[356,502,10,1,false],
[346,493,10,1,false],
[349,477,10,1,false],
[333,484,10,1,false],
[361,511,10,1,false],
[368,516,10,1,false],
[387,502,11,1,false],
[378,488,12,1,false],
[380,468,13,3,false],
[374,454,14,1,false],
[365,463,9,1,false],
[335,466,9,1,false],
[321,458,9,1,false],
[321,489,9,1,false],
[311,459,9,1,false],
[301,468,9,1,false],
[288,472,9,1,false],
[301,451,9,1,false],
[279,452,9,1,false],
[300,423,9,1,false],
[316,437,15,3,false],
[292,429,16,3,false],
[258,405,9,1,false],
[260,423,9,1,false],
[254,433,9,1,false],
[251,440,9,1,false],
[241,448,9,1,false],
[242,413,9,1,false],
[229,429,9,1,false],
[235,404,9,1,false],
[212,418,9,1,false],
[213,402,9,1,false],
[206,386,9,1,false],
[189,407,17,3,false],
[167,405,17,1,false],
[225,370,18,1,false],
[247,351,16,1,false],
[213,360,16,1,false],
[196,363,16,1,false],
[192,380,16,1,false],
[137,408,3,1,false],
[156,393,3,1,false],
[129,374,21,1,false],
[154,378,20,3,false],
[141,374,20,1,false],
[164,358,19,1,false],
[173,354,19,1,false],
[192,352,19,1,false],
[204,341,19,1,false],
[199,327,19,1,false],
[180,327,19,1,false],
[185,337,19,1,false],
[169,342,19,1,false],
[157,345,21,2,false],
[167,331,21,2,false],
[183,304,22,2,false],
[195,276,21,2,false],
[216,278,21,2,false],
[244,278,21,2,false],
[223,257,21,2,false],
[245,245,21,2,false],
[227,231,21,2,false],
[214,237,21,2,false],
[244,223,21,2,false],
[243,200,21,2,false],
[221,206,21,2,false],
[295,255,9,1,false],
[317,280,9,1,false],
[347,279,9,1,false],
[359,265,9,1,false],
[379,275,9,1,false],
[409,285,9,1,false],
[432,283,9,1,false],
[446,258,9,1,false],
[465,237,9,1,false],
[467,213,9,1,false],
[450,190,9,1,false],
[435,181,9,1,false],
[422,160,9,1,false],
[413,145,9,1,false],
[398,139,9,1,false],
[369,143,9,1,false],
[354,147,9,1,false],
[308,209,4,1,false],
[312,198,4,1,false],
[324,195,4,1,false],
[342,171,4,1,false],
[307,223,22,3,false],
[339,240,22,4,false],
[392,219,22,3,false],
[407,228,22,3,false],
[422,241,22,3,false],
[439,239,22,3,false],
[424,214,22,3,false],
[441,224,22,3,false],
[429,198,22,3,false],
[405,195,22,1,false],
[380,247,23,1,false],
[401,174,25,1,false],
[365,162,25,1,false],
[385,169,26,4,false],
[338,157,27,3,false],
[433,168,24,1,false],
[458,319,28,3,false],
[498,343,28,3,false],
[542,364,28,3,false],
[452,403,29,1,false],
[531,453,30,1,false],
[580,465,9,1,false],
[633,380,31,1,false],
[642,374,33,1,false],
[632,364,32,1,false],
[657,367,7,3,false]]

tt = trees_t[0].map((x,i) => trees_t.map(x => x[i]))


var l_score_type_tree = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0];
var l_type_tree = tt[2];
let l_position_tree_x = tt[0]; //[50, 150, 50, 200];
let l_position_tree_y = tt[1]; //[50, 150, 150, 200];
let l_bool_discovered = tt[4];  //[false, false, false, false];
let l_bool_already_discovered = tt[4]; //[false, false, false, false];



trees = [[737,655,1,2,false],
[716,640,2,2,false],
[658,653,3,2,false],
[639,634,4,1,false],
[630,615,4,1,false],
[608,630,4,1,false],
[623,638,4,1,false],
[597,608,4,1,false],
[593,596,4,1,false],
[587,593,4,1,false],
[578,602,4,1,false],
[578,612,4,1,false],
[574,591,4,1,false],
[570,604,4,1,false],
[566,590,4,1,false],
[560,604,4,1,false],
[557,584,4,1,false],
[550,599,4,1,false],
[547,588,4,1,false],
[562,620,4,1,false],
[549,617,4,1,false],
[559,595,5,2,false],
[488,560,4,1,false],
[472,571,4,1,false],
[480,573,4,1,false],
[475,575,4,1,false],
[468,577,4,1,false],
[472,582,4,1,false],
[479,581,4,1,false],
[490,582,4,1,false],
[495,586,4,1,false],
[501,589,4,1,false],
[506,592,4,1,false],
[512,595,4,1,false],
[517,600,4,1,false],
[522,602,4,1,false],
[526,605,4,1,false],
[530,598,4,1,false],
[535,592,4,1,false],
[540,587,4,1,false],
[502,610,6,3,false],
[493,604,7,1,false],
[492,613,7,1,false],
[485,613,7,1,false],
[479,613,7,1,false],
[483,604,7,1,false],
[469,592,4,1,false],
[476,597,4,1,false],
[468,598,4,1,false],
[468,603,4,1,false],
[444,560,8,1,false],
[453,564,8,1,false],
[449,577,8,1,false],
[439,564,8,1,false],
[435,570,8,1,false],
[437,579,8,1,false],
[420,524,8,1,false],
[434,535,8,1,false],
[419,532,8,1,false],
[414,536,8,1,false],
[456,551,6,1,false],
[411,516,9,1,false],
[404,539,9,1,false],
[398,530,8,1,false],
[386,516,9,1,false],
[398,512,10,1,false],
[378,510,10,1,false],
[374,517,10,1,false],
[374,502,10,1,false],
[370,475,10,1,false],
[356,502,10,1,false],
[346,493,10,1,false],
[349,477,10,1,false],
[333,484,10,1,false],
[361,511,10,1,false],
[368,516,10,1,false],
[387,502,11,1,false],
[378,488,12,1,false],
[380,468,13,3,false],
[374,454,14,1,false],
[365,463,9,1,false],
[335,466,9,1,false],
[321,458,9,1,false],
[321,489,9,1,false],
[311,459,9,1,false],
[301,468,9,1,false],
[288,472,9,1,false],
[301,451,9,1,false],
[279,452,9,1,false],
[300,423,9,1,false],
[316,437,15,3,false],
[292,429,16,3,false],
[258,405,9,1,false],
[260,423,9,1,false],
[254,433,9,1,false],
[251,440,9,1,false],
[241,448,9,1,false],
[242,413,9,1,false],
[229,429,9,1,false],
[235,404,9,1,false],
[212,418,9,1,false],
[213,402,9,1,false],
[206,386,9,1,false],
[189,407,17,3,false],
[167,405,17,1,false],
[225,370,18,1,false],
[247,351,16,1,false],
[213,360,16,1,false],
[196,363,16,1,false],
[192,380,16,1,false],
[137,408,3,1,false],
[156,393,3,1,false],
[129,374,21,1,false],
[154,378,20,3,false],
[141,374,20,1,false],
[164,358,19,1,false],
[173,354,19,1,false],
[192,352,19,1,false],
[204,341,19,1,false],
[199,327,19,1,false],
[180,327,19,1,false],
[185,337,19,1,false],
[169,342,19,1,false],
[157,345,21,2,false],
[167,331,21,2,false],
[183,304,22,2,false],
[195,276,21,2,false],
[216,278,21,2,false],
[244,278,21,2,false],
[223,257,21,2,false],
[245,245,21,2,false],
[227,231,21,2,false],
[214,237,21,2,false],
[244,223,21,2,false],
[243,200,21,2,false],
[221,206,21,2,false],
[295,255,9,1,false],
[317,280,9,1,false],
[347,279,9,1,false],
[359,265,9,1,false],
[379,275,9,1,false],
[409,285,9,1,false],
[432,283,9,1,false],
[446,258,9,1,false],
[465,237,9,1,false],
[467,213,9,1,false],
[450,190,9,1,false],
[435,181,9,1,false],
[422,160,9,1,false],
[413,145,9,1,false],
[398,139,9,1,false],
[369,143,9,1,false],
[354,147,9,1,false],
[308,209,4,1,false],
[312,198,4,1,false],
[324,195,4,1,false],
[342,171,4,1,false],
[307,223,22,3,false],
[339,240,22,4,false],
[392,219,22,3,false],
[407,228,22,3,false],
[422,241,22,3,false],
[439,239,22,3,false],
[424,214,22,3,false],
[441,224,22,3,false],
[429,198,22,3,false],
[405,195,22,1,false],
[380,247,23,1,false],
[401,174,25,1,false],
[365,162,25,1,false],
[385,169,26,4,false],
[338,157,27,3,false],
[433,168,24,1,false],
[458,319,28,3,false],
[498,343,28,3,false],
[542,364,28,3,false],
[452,403,29,1,false],
[531,453,30,1,false],
[580,465,9,1,false],
[633,380,31,1,false],
[642,374,33,1,false],
[632,364,32,1,false],
[657,367,7,3,false]]

let millisecond = 0;

function setup() {
   var canvas = createCanvas(windowWidth/1.5, windowHeight/1.5);
   imageRatio = back.height/back.width;
   realWidth=windowWidth/1.5
   canvas.parent('sketch-holder');
   rectMode(CENTER);
   background(250, 250, 250);
   draw_character(0,0)
   preload();
   frameRate(15);

   //createCanvas(1000, 1000);
  //frameRate(20);
    //background(0);


  colors = [ "#609e5a", "#3c6338", "#769962", "#469c80", "#9cc96b", "#b8d47d", "#f2d544", "#e3ab32", "#456e30", "#668a54", "#45ad53", "#54cc64", "#b1d97e","#e8c866","#e39571","#ba8c66","#615247","#a37d62","#c96971","#91bf7a","#8c7f6c","#7ca17f","#e6d9ca","#d3e391","#3e9c7f","#3e7350","#d9cd98","#88b06b","#387a3c","#dbcb63","#55a365","#056118","#456e30", "#668a54", "#45ad53", "#54cc64", "#b1d97e","#e8c866","#e39571","#ba8c66","#615247","#a37d62","#c96971","#91bf7a","#8c7f6c","#7ca17f","#e6d9ca","#d3e391","#3e9c7f","#3e7350","#d9cd98","#88b06b","#387a3c","#dbcb63","#55a365","#056118"]

 }

function draw() {
   draw_background();
   fill(255);

   clear();
       background(0);

     fill(150);
     r = 1;

     strokeWeight(1);
     stroke(255);
     beginShape();

       vertex(random(666-r,666+r),random(691-r,691+r));
     vertex(random(674-r,674+r),random(678-r,678+r));
     vertex(random(678-r,678+r),random(667-r,667+r));
     vertex(random(680-r,680+r),random(655-r,655+r));
     vertex(random(681-r,681+r),random(646-r,646+r));
     vertex(random(680-r,680+r),random(636-r,636+r));
     vertex(random(680-r,680+r),random(628-r,628+r));
     vertex(random(675-r,675+r),random(615-r,615+r));
     vertex(random(668-r,668+r),random(609-r,609+r));
     vertex(random(659-r,659+r),random(605-r,605+r));
     vertex(random(647-r,647+r),random(599-r,599+r));
     vertex(random(632-r,632+r),random(590-r,590+r));
     vertex(random(626-r,626+r),random(586-r,586+r));
     vertex(random(621-r,621+r),random(581-r,581+r));
     vertex(random(612-r,612+r),random(575-r,575+r));
     vertex(random(600-r,600+r),random(572-r,572+r));
     vertex(random(591-r,591+r),random(568-r,568+r));
     vertex(random(584-r,584+r),random(563-r,563+r));
     vertex(random(574-r,574+r),random(555-r,555+r));
     vertex(random(564-r,564+r),random(550-r,550+r));
     vertex(random(555-r,555+r),random(544-r,544+r));
     vertex(random(540-r,540+r),random(535-r,535+r));
     vertex(random(527-r,527+r),random(524-r,524+r));
     vertex(random(522-r,522+r),random(521-r,521+r));
     vertex(random(516-r,516+r),random(518-r,518+r));
     vertex(random(503-r,503+r),random(514-r,514+r));
     vertex(random(488-r,488+r),random(504-r,504+r));
     vertex(random(477-r,477+r),random(496-r,496+r));
     vertex(random(470-r,470+r),random(493-r,493+r));
     vertex(random(461-r,461+r),random(484-r,484+r));
     vertex(random(450-r,450+r),random(475-r,475+r));
     vertex(random(442-r,442+r),random(469-r,469+r));
     vertex(random(427-r,427+r),random(460-r,460+r));
     vertex(random(416-r,416+r),random(453-r,453+r));
     vertex(random(406-r,406+r),random(447-r,447+r));
     vertex(random(398-r,398+r),random(440-r,440+r));
     vertex(random(387-r,387+r),random(433-r,433+r));
     vertex(random(374-r,374+r),random(425-r,425+r));
     vertex(random(366-r,366+r),random(420-r,420+r));
     vertex(random(355-r,355+r),random(412-r,412+r));
     vertex(random(346-r,346+r),random(406-r,406+r));
     vertex(random(341-r,341+r),random(402-r,402+r));
     vertex(random(332-r,332+r),random(396-r,396+r));
     vertex(random(324-r,324+r),random(389-r,389+r));
     vertex(random(317-r,317+r),random(385-r,385+r));
     vertex(random(311-r,311+r),random(379-r,379+r));
     vertex(random(305-r,305+r),random(373-r,373+r));
     vertex(random(299-r,299+r),random(366-r,366+r));
     vertex(random(292-r,292+r),random(360-r,360+r));
     vertex(random(287-r,287+r),random(352-r,352+r));
     vertex(random(280-r,280+r),random(342-r,342+r));
     vertex(random(277-r,277+r),random(334-r,334+r));
     vertex(random(273-r,273+r),random(323-r,323+r));
     vertex(random(272-r,272+r),random(316-r,316+r));
     vertex(random(269-r,269+r),random(305-r,305+r));
     vertex(random(267-r,267+r),random(297-r,297+r));
     vertex(random(265-r,265+r),random(286-r,286+r));
     vertex(random(264-r,264+r),random(278-r,278+r));
     vertex(random(264-r,264+r),random(268-r,268+r));
     vertex(random(264-r,264+r),random(259-r,259+r));
     vertex(random(264-r,264+r),random(252-r,252+r));
     vertex(random(265-r,265+r),random(241-r,241+r));
     vertex(random(266-r,266+r),random(232-r,232+r));
     vertex(random(266-r,266+r),random(221-r,221+r));
     vertex(random(269-r,269+r),random(214-r,214+r));
     vertex(random(271-r,271+r),random(205-r,205+r));
     vertex(random(272-r,272+r),random(199-r,199+r));
     vertex(random(275-r,275+r),random(193-r,193+r));
     vertex(random(278-r,278+r),random(183-r,183+r));
     vertex(random(282-r,282+r),random(176-r,176+r));
     vertex(random(287-r,287+r),random(169-r,169+r));
     vertex(random(292-r,292+r),random(162-r,162+r));
     vertex(random(296-r,296+r),random(155-r,155+r));
     vertex(random(302-r,302+r),random(148-r,148+r));
     vertex(random(308-r,308+r),random(142-r,142+r));
     vertex(random(313-r,313+r),random(134-r,134+r));
     vertex(random(320-r,320+r),random(129-r,129+r));
     vertex(random(329-r,329+r),random(124-r,124+r));
     vertex(random(336-r,336+r),random(121-r,121+r));
     vertex(random(344-r,344+r),random(118-r,118+r));
     vertex(random(351-r,351+r),random(115-r,115+r));
     vertex(random(362-r,362+r),random(113-r,113+r));
     vertex(random(371-r,371+r),random(111-r,111+r));
     vertex(random(381-r,381+r),random(108-r,108+r));
     vertex(random(389-r,389+r),random(106-r,106+r));
     vertex(random(395-r,395+r),random(105-r,105+r));
     vertex(random(405-r,405+r),random(102-r,102+r));
     vertex(random(413-r,413+r),random(100-r,100+r));
     vertex(random(421-r,421+r),random(97-r,97+r));
     vertex(random(430-r,430+r),random(94-r,94+r));
     vertex(random(437-r,437+r),random(90-r,90+r));
     vertex(random(447-r,447+r),random(97-r,97+r));
     vertex(random(441-r,441+r),random(101-r,101+r));
     vertex(random(434-r,434+r),random(103-r,103+r));
     vertex(random(429-r,429+r),random(106-r,106+r));
     vertex(random(422-r,422+r),random(109-r,109+r));
     vertex(random(416-r,416+r),random(112-r,112+r));
     vertex(random(410-r,410+r),random(114-r,114+r));
     vertex(random(402-r,402+r),random(116-r,116+r));
     vertex(random(395-r,395+r),random(118-r,118+r));
     vertex(random(386-r,386+r),random(122-r,122+r));
     vertex(random(380-r,380+r),random(124-r,124+r));
     vertex(random(373-r,373+r),random(127-r,127+r));
     vertex(random(366-r,366+r),random(131-r,131+r));
     vertex(random(360-r,360+r),random(133-r,133+r));
     vertex(random(353-r,353+r),random(136-r,136+r));
     vertex(random(345-r,345+r),random(140-r,140+r));
     vertex(random(338-r,338+r),random(145-r,145+r));
     vertex(random(333-r,333+r),random(148-r,148+r));
     vertex(random(328-r,328+r),random(152-r,152+r));
     vertex(random(323-r,323+r),random(156-r,156+r));
     vertex(random(319-r,319+r),random(159-r,159+r));
     vertex(random(314-r,314+r),random(166-r,166+r));
     vertex(random(308-r,308+r),random(172-r,172+r));
     vertex(random(304-r,304+r),random(180-r,180+r));
     vertex(random(301-r,301+r),random(186-r,186+r));
     vertex(random(297-r,297+r),random(193-r,193+r));
     vertex(random(293-r,293+r),random(202-r,202+r));
     vertex(random(289-r,289+r),random(211-r,211+r));
     vertex(random(287-r,287+r),random(217-r,217+r));
     vertex(random(284-r,284+r),random(223-r,223+r));
     vertex(random(284-r,284+r),random(230-r,230+r));
     vertex(random(284-r,284+r),random(241-r,241+r));
     vertex(random(284-r,284+r),random(251-r,251+r));
     vertex(random(284-r,284+r),random(264-r,264+r));
     vertex(random(284-r,284+r),random(271-r,271+r));
     vertex(random(284-r,284+r),random(280-r,280+r));
     vertex(random(286-r,286+r),random(291-r,291+r));
     vertex(random(287-r,287+r),random(301-r,301+r));
     vertex(random(289-r,289+r),random(309-r,309+r));
     vertex(random(291-r,291+r),random(321-r,321+r));
     vertex(random(296-r,296+r),random(328-r,328+r));
     vertex(random(302-r,302+r),random(337-r,337+r));
     vertex(random(309-r,309+r),random(345-r,345+r));
     vertex(random(321-r,321+r),random(358-r,358+r));
     vertex(random(331-r,331+r),random(367-r,367+r));
     vertex(random(344-r,344+r),random(376-r,376+r));
     vertex(random(361-r,361+r),random(388-r,388+r));
     vertex(random(373-r,373+r),random(394-r,394+r));
     vertex(random(392-r,392+r),random(407-r,407+r));
     vertex(random(407-r,407+r),random(416-r,416+r));
     vertex(random(419-r,419+r),random(426-r,426+r));
     vertex(random(432-r,432+r),random(436-r,436+r));
     vertex(random(449-r,449+r),random(448-r,448+r));
     vertex(random(467-r,467+r),random(457-r,457+r));
     vertex(random(485-r,485+r),random(467-r,467+r));
     vertex(random(499-r,499+r),random(478-r,478+r));
     vertex(random(512-r,512+r),random(488-r,488+r));
     vertex(random(531-r,531+r),random(500-r,500+r));
     vertex(random(545-r,545+r),random(508-r,508+r));
     vertex(random(560-r,560+r),random(517-r,517+r));
     vertex(random(572-r,572+r),random(525-r,525+r));
     vertex(random(589-r,589+r),random(534-r,534+r));
     vertex(random(604-r,604+r),random(544-r,544+r));
     vertex(random(619-r,619+r),random(554-r,554+r));
     vertex(random(635-r,635+r),random(562-r,562+r));
     vertex(random(650-r,650+r),random(572-r,572+r));
     vertex(random(665-r,665+r),random(581-r,581+r));
     vertex(random(681-r,681+r),random(592-r,592+r));
     vertex(random(690-r,690+r),random(600-r,600+r));
     vertex(random(698-r,698+r),random(609-r,609+r));
     vertex(random(704-r,704+r),random(620-r,620+r));
     vertex(random(709-r,709+r),random(628-r,628+r));
     vertex(random(710-r,710+r),random(634-r,634+r));
     vertex(random(715-r,715+r),random(647-r,647+r));
     vertex(random(721-r,721+r),random(658-r,658+r));
     vertex(random(730-r,730+r),random(672-r,672+r));
     vertex(random(734-r,734+r),random(676-r,676+r));
     vertex(random(748-r,748+r),random(686-r,686+r));
     vertex(random(756-r,756+r),random(692-r,692+r));
     vertex(random(755-r,755+r),random(697-r,697+r));
     vertex(random(749-r,749+r),random(704-r,704+r));
     vertex(random(743-r,743+r),random(709-r,709+r));
     vertex(random(734-r,734+r),random(713-r,713+r));
     vertex(random(725-r,725+r),random(716-r,716+r));
     vertex(random(716-r,716+r),random(717-r,717+r));
     vertex(random(705-r,705+r),random(715-r,715+r));
     vertex(random(695-r,695+r),random(709-r,709+r));
     vertex(random(686-r,686+r),random(706-r,706+r));
     vertex(random(677-r,677+r),random(702-r,702+r));

     endShape();


     for (let a = 0; a < 183; a += 1){

       if ( trees[a][4] == false){
         fill(0);
         strokeWeight(1);
         stroke(255);

         polygon(trees[a][0], trees[a][1], trees[a][3], trees[a][3]+10, 1);

       } else {
         fill(255,255,255,0);
         strokeWeight(trees[a][3]);

         stroke(colors[trees[a][2]]);

         polygon(trees[a][0], trees[a][1], trees[a][3]*10, trees[a][3]*10, 3);

       }
     }

     // COLAS



   move_character();
   draw_character(x_pos, y_pos, windowWidth, windowHeight);
   //draw_trees();
   //check_max_score();
   on_tree_discovery();
   //draw_upper_panel();



}

function draw_background(){
  var backWidth;
  var backHeight;
  backWidth = back.width;
  backHeight= back.height;
  if (windowWidth/1.5 < realWidth) {
        backWidth = windowWidth/1.5;
    backHeight= backWidth*imageRatio;
  }
  //image(back,0,0,backWidth*3,backHeight*3); //To draw the background, doesn't work so well :(
  background(250, 250, 250);
}

function draw_trees(){
  for (let idx_pos=0; idx_pos< l_position_tree_x.length; idx_pos++) {
  fill('green');
  ellipse(l_position_tree_x[idx_pos], l_position_tree_y[idx_pos],50,50);
  }
}

function move_character(){
  if (keyIsDown(LEFT_ARROW) && x_pos>-80) {
      x_pos -= 5;
  }
  if (keyIsDown(RIGHT_ARROW) && x_pos<windowWidth/1.5-50 ) {
      x_pos += 5;
  }
  if (keyIsDown(UP_ARROW) && y_pos>-80) {
      y_pos -= 5;
  }
  if (keyIsDown(DOWN_ARROW)&& y_pos<windowHeight/1.5-50) {
      y_pos += 5;
  }
}

function draw_character(x,y, width, height){

  stroke(0);
  fill(255);
  rect(100+x,100+y,20,100);
  ellipse(100+x,70+y,60,60);
  ellipse(81+x,70+y,random(16,18),random(32,34));
  ellipse(119+x,70+y,random(16,18),random(32,34));

  stroke(255);
  line(90+x,150+y,random(80,88)+x,160+y);
  line(110+x,150+y,random(120,128)+x,160+y);
  stroke(0);
  fill(0);

  //let revealSize = 150;
  let npoints = 30;
  let angle = TWO_PI / npoints;

  for (let revealSize = 150; revealSize > 80 ; revealSize -= 10) {
    fill(0, 100);
    stroke(255);
    beginShape();
    // Exterior part of shape, clockwise winding
    vertex(-width, -height);
    vertex(width, -height);
    vertex(width, height);
    vertex(-width, height);
    // Interior part of shape, counter-clockwise winding
    beginContour();
    for (let a = TWO_PI; a > 0 ; a -= angle) {
      let sx = x + 100 + cos(a) * revealSize + random(0,2);
      let sy = y + 100 + sin(a) * revealSize + random(0,2);
      vertex(int(sx), int(sy));
    }
    endContour();
    endShape(CLOSE);
  }
}

function check_max_score() {
  if (max(l_score_type_tree)>=10) {
    fill('red');
    //stroke(255, 255)
    noStroke();
    textSize(40);
    text('Congrats bae, you just won my love <3' , 300, 400);
  }
}

function draw_upper_panel() {
  fill(255);
  stroke(0);
  rect(0,0,windowWidth*2,70);
  fill(0);
  stroke(255);
  textSize(10);

  let i = 0;
  for (let ty = 0; ty < l_score_type_tree.length/2; ty +=1){
      text('Tree ' + str(i) +': ' + str(l_score_type_tree[i]), 20+(i*60), 18);
    i += 1;
  }

  let margin = (l_score_type_tree.length/2)*60;

  for (let ty = 0; ty < l_score_type_tree.length/2; ty +=1){
      text('Tree ' + str(i) +': ' + str(l_score_type_tree[i]), 20+(i*60)-margin, 30);
    i += 1;
  }

  //text('Tree 2: ' + str(l_score_type_tree[1]), 170, 18);
  //text('Tree 3: ' + str(l_score_type_tree[2]), 320, 18);
}

function on_tree_discovery() {

  for (let idx_pos=0; idx_pos< l_position_tree_x.length; idx_pos++) {
    if (l_bool_discovered[idx_pos] && !l_bool_already_discovered[idx_pos] && millisecond ===0){
      millisecond = millis();
    }
  }

  for (let idx_pos=0; idx_pos< l_position_tree_x.length; idx_pos++) {
    if (l_bool_discovered[idx_pos] && !l_bool_already_discovered[idx_pos]){
      console.log('Pressed')
      
      if (millis()-millisecond<1000){
        //fill(90,160,141);
        //noStroke()
        //rect(l_position_tree_x[idx_pos]+150, l_position_tree_y[idx_pos]+50, 200, 150);
        image(l_images_leaf[l_type_tree[idx_pos]], l_position_tree_x[idx_pos]+50, l_position_tree_y[idx_pos]-50, img.width / 10, img.height / 10);
        //fill(255);
        //text('Congratulations!\nYou found a ' + l_proper_name_leafs[l_type_tree[idx_pos]] , l_position_tree_x[idx_pos]+50, l_position_tree_y[idx_pos]+100);
        textSize(30);
        text('+1', l_position_tree_x[idx_pos]+105, l_position_tree_y[idx_pos]+13);
      }
      else {
      l_bool_already_discovered[idx_pos] = true;
      millisecond = 0;
      }
    }
  }
}

function mouseClicked() {
  for (let idx_pos=0; idx_pos< l_position_tree_x.length; idx_pos++) {
    if ((mouseX > l_position_tree_x[idx_pos]-30 && mouseX < l_position_tree_x[idx_pos]+30) && (mouseY > l_position_tree_y[idx_pos]-30 && mouseY < l_position_tree_y[idx_pos]+30)) {
      l_score_type_tree[l_type_tree[idx_pos]] += 1;
      if (!l_bool_discovered[idx_pos]) {
        l_bool_discovered[idx_pos] = true;
      }
    }
  }
}

// When the user clicks the mouse
function mousePressed() {
// Check if mouse is inside the circle

for (let a = 0; a < 183; a += 1){

  let d = dist(mouseX, mouseY, trees[a][0], trees[a][1]);

  if ( trees[a][4] == false){
  if (d < 6) {
    trees[a][4] = true;

    //image(l_images_leaf[l_type_tree[a[2]]], a[0]+50, a[1]-50, img.width / 10, img.height / 10);
    //textSize(30);
    //text('+1', a[0]+105, a[1]+13);

  }

}}}

function polygon(x, y, radius, npoints, rr) {

  r=3;
  //strokeWeight(radius/);
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = random(x-r, x+r) + cos(a) * radius;
    let sy = random(y-r, y+r) + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);


}
