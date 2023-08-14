    
            var map_282e637f7b79ea2f336cb92dff3454ff = L.map(
                "map_282e637f7b79ea2f336cb92dff3454ff",
                {
                    center: [51.79711, -0.3228],
                    crs: L.CRS.EPSG3857,
                    zoom: 15,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_a53cad7b9899458b70943def4d5696e8 = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {"attribution": "Data by \u0026copy; \u003ca target=\"_blank\" href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca target=\"_blank\" href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_282e637f7b79ea2f336cb92dff3454ff);
        
    
            var tile_layer_17973779838e6e4424e74be4626a60d7 = L.tileLayer(
                "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXNrYW5kYXJpbmltYSIsImEiOiJjbGtrNXJnb2QwNGxyM2RxazVkMGxyOHZmIn0.FZGKcAfZSxueZyZcPl1V2A",
                {"attribution": "Mapbox", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_282e637f7b79ea2f336cb92dff3454ff);
        
    
        function geo_json_9c36a7630de8b3bf1a0f592956aab40e_styler(feature) {
            switch(feature.id) {
                default:
                    return {"color": "#000000", "fillColor": "#44CD7D", "fillOpacity": 0.5, "weight": 2};
            }
        }

        function geo_json_9c36a7630de8b3bf1a0f592956aab40e_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_9c36a7630de8b3bf1a0f592956aab40e = L.geoJson(null, {
                onEachFeature: geo_json_9c36a7630de8b3bf1a0f592956aab40e_onEachFeature,
            
                style: geo_json_9c36a7630de8b3bf1a0f592956aab40e_styler,
        });

        function geo_json_9c36a7630de8b3bf1a0f592956aab40e_add (data) {
            geo_json_9c36a7630de8b3bf1a0f592956aab40e
                .addData(data)
                .addTo(map_282e637f7b79ea2f336cb92dff3454ff);
        }
            geo_json_9c36a7630de8b3bf1a0f592956aab40e_add({"features": [{"geometry": {"coordinates": [[[-0.33265531070414883, 51.79075272131322], [-0.33201988735367705, 51.79006342859647], [-0.33169738502853935, 51.79013453104392], [-0.3311896864596335, 51.79022143411195], [-0.3308288675141319, 51.79027081111851], [-0.33045208334465764, 51.790294511691734], [-0.3299124530526978, 51.79032018791506], [-0.32955802002502393, 51.79035968936727], [-0.3296282684079341, 51.79055521851743], [-0.32980388867867727, 51.79077049778064], [-0.3300018593920525, 51.79096800122853], [-0.3301200029350947, 51.791114153095734], [-0.33019983055041463, 51.79126030374815], [-0.3302796583245553, 51.79146570430859], [-0.330410573093496, 51.79179947864128], [-0.3305159451408689, 51.79208980051074], [-0.3305957721530272, 51.79225174885478], [-0.33071072326331635, 51.79243936926302], [-0.33085121916502547, 51.79267636368263], [-0.33102364524743794, 51.79294298069084], [-0.33121203775206065, 51.79322144635324], [-0.33128547838977124, 51.79330044221716], [-0.3313206019716253, 51.79335179108592], [-0.33131421550802015, 51.79343868731645], [-0.33127589905974575, 51.79356310666682], [-0.33129505791337754, 51.793640127979266], [-0.3313844629014915, 51.79375072200456], [-0.3317325099891652, 51.7939798101367], [-0.3319177082544408, 51.79410422787253], [-0.3320262726040024, 51.79416347409064], [-0.33225936791254385, 51.79430566568963], [-0.33253716622338336, 51.79446365513153], [-0.3328405090678986, 51.79462954421798], [-0.3329171431922889, 51.79463349400081], [-0.3330097429968961, 51.79460387062376], [-0.33315981765743324, 51.79456042383163], [-0.3332460303669722, 51.79454264941898], [-0.3333450163537623, 51.79456634774104], [-0.33346316038655555, 51.79458807143805], [-0.33354937455931816, 51.79459794670907], [-0.333772889172109, 51.794532775942606], [-0.3340347220204595, 51.794471554895125], [-0.3342869762956648, 51.794430082664626], [-0.3344881401781749, 51.79437281172331], [-0.3346222507068762, 51.79431159077864], [-0.3348425728898027, 51.794228645750366], [-0.3351171773933445, 51.79412397716704], [-0.33522254967139054, 51.79408645454496], [-0.3352927966494578, 51.79402918325254], [-0.3353311133968525, 51.7939738858387], [-0.3353534654360802, 51.79389686494571], [-0.3353247274856538, 51.79381984355446], [-0.3350533165718491, 51.79343671239236], [-0.33464140836007417, 51.79289558278278], [-0.33449771940651263, 51.792700063251694], [-0.33417841101940293, 51.79230704609128], [-0.3339453166409814, 51.79208782448736], [-0.33377927603190316, 51.79196340158845], [-0.33363558700166607, 51.79183107741023], [-0.33265531070414883, 51.79075272131322]]], "type": "Polygon"}, "id": 0, "properties": {"Adj_Fields": "2", "BSI": "1", "B_D_S": "Good (Score: 5.16 out of 10)", "BiodiScore": "3.33", "Break_Crop": "0.33", "Crop_2016": "Winter wheat", "Crop_2017": "Winter oats", "Crop_2018": "Winter wheat", "Crop_2019": "Winter barley", "Crop_2020": "Winter oilseed rape", "Crop_2021": "Winter wheat", "Crop_2022": "Spring barley", "Crop_Func": "0", "Crop_Grown": 2, "Drilling": "0.33", "EDI": "0", "FID": 0, "F_S": "Fair (Score: 4.17 out of 10)", "FieldScore": "5.66", "Field_Name": "Farmers", "S_H_S": "Fair (Score: 4.02 out of 10)", "Sec_1_Sum": 2.66, "Sec_2_Sum": "3", "SoilHealth": "2.33", "Status": "Fair (Score: 4.17 out of 10)", "TotalScore": "No value"}, "type": "Feature"}, {"geometry": {"coordinates": [[[-0.3382144628921225, 51.797765519734625], [-0.3370750460040538, 51.79631500258705], [-0.33651556034621727, 51.79557577564875], [-0.33611956227141776, 51.794996069583085], [-0.335752628947858, 51.79445904807102], [-0.3355346470965914, 51.79411526136147], [-0.3350260261441443, 51.79427704360848], [-0.3343611836357676, 51.79456465503881], [-0.3342667242938528, 51.79458262984857], [-0.33419769727472176, 51.79459835905674], [-0.3340814407454694, 51.79459835897614], [-0.3339542842502341, 51.794609593692044], [-0.33384166145592614, 51.79463206306575], [-0.33375810163317254, 51.79465902668282], [-0.33367090918797043, 51.79470396520395], [-0.33352558808852295, 51.794748904226225], [-0.3332640106555328, 51.79483204158092], [-0.33308962669556835, 51.79487698002725], [-0.3328825439797141, 51.7948994499846], [-0.33276992052273147, 51.79490169701835], [-0.3324792801658064, 51.79487473419045], [-0.3322794629753935, 51.79483878287404], [-0.3321450409470752, 51.794805079007666], [-0.33199245550233086, 51.794802831515405], [-0.33194159238755777, 51.794825301383], [-0.33193432681373225, 51.7948657463612], [-0.3319343268105198, 51.79491517861767], [-0.3320069873527222, 51.79498932786785], [-0.33205421604249585, 51.79503426691913], [-0.3320578491026239, 51.795106168014414], [-0.3320723812726003, 51.79526794687724], [-0.33207601444417933, 51.795326367019555], [-0.3319997208767248, 51.79536231766076], [-0.3320324183798242, 51.79545444069701], [-0.33209417922914636, 51.795629699732665], [-0.332166840492907, 51.79574878597776], [-0.33212687649235734, 51.795829673930704], [-0.3320396837564759, 51.79588135271586], [-0.33187256486807926, 51.79590831564001], [-0.3316109880090213, 51.79594426533662], [-0.3305382970442785, 51.79600995239026], [-0.33060854507902965, 51.797044736166384], [-0.33064366916255344, 51.79710397936315], [-0.3306755997079548, 51.797117802190485], [-0.33080651620118334, 51.797121751635736], [-0.33206139711730115, 51.796979568591745], [-0.33298739198423044, 51.79688675540168], [-0.3332204866412692, 51.79686898188739], [-0.3332939271819945, 51.796898603511025], [-0.33332266553874323, 51.796945997300604], [-0.33335459591942834, 51.79703881135339], [-0.3333482092360886, 51.79709410400684], [-0.33328434681559166, 51.79711977658603], [-0.33315343196745856, 51.79713162453706], [-0.33213803062948705, 51.797220489300926], [-0.3304201534118825, 51.79736464611388], [-0.3298102745742294, 51.79740809018114], [-0.32925148568342094, 51.79743968618173], [-0.32908683128118765, 51.79744944594923], [-0.32892362162787786, 51.79746609778217], [-0.32876260489426207, 51.79748956509892], [-0.3286045216886993, 51.797519740641064], [-0.32845009642838346, 51.79755648455225], [-0.3283000400403579, 51.79759962981143], [-0.3281550399828024, 51.79764897759462], [-0.32801576301209107, 51.797704300910645], [-0.32784652874386894, 51.797767492301645], [-0.32776989515788435, 51.79782673391546], [-0.3277124192614936, 51.79788992484766], [-0.3277092271092539, 51.79797286301785], [-0.3277124198679651, 51.79804197853269], [-0.32780182609434544, 51.79810714355273], [-0.3279423215076777, 51.79826709423524], [-0.32804450044069156, 51.798344107961114], [-0.32819776842369314, 51.79848233701255], [-0.32865118632912566, 51.79895428551741], [-0.3287278198713254, 51.79904906983288], [-0.3287980672874192, 51.79906289291344], [-0.3289034383369387, 51.799078689894664], [-0.32958675936485293, 51.799112259098074], [-0.33015512731235613, 51.7991320056189], [-0.3305223324850543, 51.79913398059489], [-0.33077458575564833, 51.79913200516577], [-0.33113540463854996, 51.79910238555804], [-0.3318730059619172, 51.799033271405115], [-0.33229129878832386, 51.79900365171689], [-0.33244137509207866, 51.79897995513729], [-0.33247649911843724, 51.798938487225776], [-0.33249246347811134, 51.79887332316483], [-0.3325116217557381, 51.79873114577571], [-0.33259464296525837, 51.79859884193218], [-0.33270001321325765, 51.798476411767226], [-0.33275429652367133, 51.79843099368982], [-0.3328692481032725, 51.79844481613009], [-0.33299696943456236, 51.79849220895121], [-0.33310872813532577, 51.79855737388518], [-0.33324283786164927, 51.79867190563274], [-0.33334560576495154, 51.798737896048586], [-0.33345629265777876, 51.79879876532681], [-0.33357423477624465, 51.798854147857696], [-0.3336987293294299, 51.79890371264082], [-0.3338290287371191, 51.79894716311198], [-0.333964355059463, 51.79898423914667], [-0.3341038998986438, 51.79901471975694], [-0.3342468244665098, 51.799038421294355], [-0.3343922781978338, 51.79905520400863], [-0.3345393874210808, 51.799064964693684], [-0.33468727380638363, 51.799067647739825], [-0.334835053282422, 51.79906323522717], [-0.33498184012201054, 51.79905175417727], [-0.33512675577373346, 51.799033273081236], [-0.33529598878515765, 51.799007602578044], [-0.3356504197709498, 51.79896021048748], [-0.3358260397782973, 51.798928615738106], [-0.3360846792110926, 51.79885752816297], [-0.33646784881162956, 51.798784464215565], [-0.3367967356806932, 51.798744970951105], [-0.33688933504902363, 51.79868375629086], [-0.3369819351122823, 51.79861069269644], [-0.33708091978842375, 51.79858304754807], [-0.3372214154286525, 51.7985277560997], [-0.33731401412155143, 51.79852380719849], [-0.3376684470241127, 51.79828091933841], [-0.3378919613500189, 51.798101221089745], [-0.3380995123861985, 51.79789980027692], [-0.3382144628921225, 51.797765519734625]]], "type": "Polygon"}, "id": 1, "properties": {"Adj_Fields": "2", "BSI": "1", "B_D_S": "Fair (Score: 3.76 out of 10)", "BiodiScore": "2.66", "Break_Crop": "0.33", "Crop_2016": "Winter oilseed rape", "Crop_2017": "Winter wheat", "Crop_2018": "Rye", "Crop_2019": "Winter wheat", "Crop_2020": "Winter wheat", "Crop_2021": "Winter oilseed rape", "Crop_2022": "Winter wheat", "Crop_Func": "0", "Crop_Grown": 1, "Drilling": "No drilling dates", "EDI": "0", "FID": 1, "F_S": "Needs improvement (Score: 2.06 out of 10)", "FieldScore": "4.33", "Field_Name": "Birch", "S_H_S": "Needs improvement (Score: 1 out of 10)", "Sec_1_Sum": 1.33, "Sec_2_Sum": "3", "SoilHealth": "1.66", "Status": "Needs improvement (Score: 2.06 out of 10)", "TotalScore": "No value"}, "type": "Feature"}, {"geometry": {"coordinates": [[[-0.33191025806289076, 51.79961272425913], [-0.3315356032278913, 51.79929326936217], [-0.33122339087635516, 51.799265185483705], [-0.3305422000072589, 51.79923007975279], [-0.329191171842197, 51.79918444389823], [-0.3288335462871403, 51.799170402255434], [-0.3285781001047576, 51.79927571743816], [-0.328180739378212, 51.79941613713503], [-0.32787420282166263, 51.79948283700323], [-0.32749387076259706, 51.799500389394545], [-0.3272043641404914, 51.799510920564806], [-0.3269659479743612, 51.79958464075258], [-0.32665373574832673, 51.799760164464594], [-0.3264266721665689, 51.799914624222026], [-0.32652317310172746, 51.80014280386299], [-0.32660832343540175, 51.80056054463561], [-0.32666508854095094, 51.800802761848516], [-0.3266139985565834, 51.800995832578856], [-0.32656858610694517, 51.801150289262594], [-0.3266083222639569, 51.80123453806668], [-0.32666508797753935, 51.801287192677385], [-0.32831130004658077, 51.800788719756746], [-0.33191025806289076, 51.79961272425913]]], "type": "Polygon"}, "id": 2, "properties": {"Adj_Fields": "0", "BSI": "0", "B_D_S": "Fair (Score: 5.84 out of 10)", "BiodiScore": "3.66", "Break_Crop": "0.33", "Crop_2016": "Winter oilseed rape", "Crop_2017": "Winter oats", "Crop_2018": "Rye", "Crop_2019": "Winter wheat", "Crop_2020": "Winter barley", "Crop_2021": "Winter oilseed rape", "Crop_2022": "Winter wheat", "Crop_Func": "0", "Crop_Grown": 3, "Drilling": "No drilling dates", "EDI": "2", "FID": 2, "F_S": "Fair (Score: 3.65 out of 10)", "FieldScore": "5.33", "Field_Name": "Twelve Acres", "S_H_S": "Needs improvement (Score: 1 out of 10)", "Sec_1_Sum": 3.33, "Sec_2_Sum": "2", "SoilHealth": "1.66", "Status": "Fair (Score: 3.65 out of 10)", "TotalScore": "No value"}, "type": "Feature"}, {"geometry": {"coordinates": [[[-0.3207877753482885, 51.800174539476366], [-0.32184225863387317, 51.800705313835635], [-0.32258203044160094, 51.80106168838014], [-0.32346076641647076, 51.80145849819469], [-0.3251610184240257, 51.802254635826785], [-0.32521823793045246, 51.80224326300834], [-0.325277501264591, 51.80222683423865], [-0.325394241157422, 51.802166966749844], [-0.32559221144084555, 51.802076138006875], [-0.32604243695983504, 51.80178390498417], [-0.3259562229197608, 51.80168122852779], [-0.32577421853713306, 51.80152326412931], [-0.3254325583878867, 51.80135345079148], [-0.3251547606104843, 51.80113624778526], [-0.32508770647193325, 51.80108293421411], [-0.3250621615849601, 51.801023696273326], [-0.32506216143373035, 51.80093878918898], [-0.32508132088652325, 51.8008558563586], [-0.3250461958509354, 51.80076502573889], [-0.32481310132608376, 51.80056756515237], [-0.3246087441537688, 51.800431317342245], [-0.3245161436850412, 51.800326663120345], [-0.3244842140832672, 51.8002062119836], [-0.3245001787917244, 51.80008773375397], [-0.3245736205436944, 51.80003836878165], [-0.3248226812705236, 51.799931738391216], [-0.32540382112964317, 51.799700705983284], [-0.3258891702832648, 51.79953088638513], [-0.3257837973464673, 51.799404509048415], [-0.3256752339177066, 51.799284055130215], [-0.32555389601674034, 51.79919322078427], [-0.3253814699853556, 51.798976007546045], [-0.3252345883953661, 51.7987607675044], [-0.3250525822207182, 51.79845864066116], [-0.3249120867913256, 51.79832238695186], [-0.32473966103191465, 51.79819798108249], [-0.32470134297105563, 51.79813084047457], [-0.3246853783348124, 51.79799063654344], [-0.3246023584756532, 51.797696402717484], [-0.32452572326423973, 51.79763321205249], [-0.3242702769905354, 51.79751867718797], [-0.3237370316851053, 51.79733305163128], [-0.3234943584734795, 51.79727183420701], [-0.3233091593159154, 51.797256036791936], [-0.32304094061196476, 51.797250112532595], [-0.3227535637086808, 51.797224441045664], [-0.32240551785144833, 51.79719087044797], [-0.3221277190459351, 51.79717902187985], [-0.32189462423743276, 51.79720666833237], [-0.32170942568290106, 51.79724023955609], [-0.32163598444362207, 51.797291582757], [-0.32158489452765776, 51.79732712845441], [-0.3214954892307266, 51.79738834539379], [-0.32126878041915635, 51.79747918298848], [-0.32100375461123376, 51.79762333836115], [-0.3205215993794413, 51.797887952150056], [-0.32027892481584913, 51.79802420730819], [-0.3200905324221531, 51.798164411821716], [-0.31981912144884345, 51.798274995703544], [-0.31951897165217025, 51.798371755560254], [-0.3191700820441904, 51.79846484776189], [-0.3190811464183504, 51.798523892610795], [-0.31896082099948836, 51.79859506943283], [-0.31887711597658225, 51.79866382036363], [-0.3187149390480085, 51.798762497928664], [-0.3185305252685322, 51.79885632162539], [-0.31838796704281935, 51.79890161623129], [-0.3183775032987937, 51.79892102799622], [-0.31838535130664686, 51.798951762868846], [-0.3184154311715067, 51.798977646160836], [-0.31847297813001607, 51.79900110147008], [-0.3185606084281869, 51.799044777724504], [-0.31885455453516054, 51.79919511829191], [-0.31901804132473227, 51.79927726353849], [-0.3193531868257858, 51.79945545684852], [-0.31992334346996415, 51.79973727778143], [-0.3207877753482885, 51.800174539476366]]], "type": "Polygon"}, "id": 3, "properties": {"Adj_Fields": "0", "BSI": "1", "B_D_S": "Needs improvement (Score: 1 out of 10)", "BiodiScore": "1.33", "Break_Crop": "0.33", "Crop_2016": "Spring barley", "Crop_2017": "Winter oilseed rape", "Crop_2018": "Winter wheat", "Crop_2019": "Winter oats", "Crop_2020": "Winter wheat", "Crop_2021": "Winter barley", "Crop_2022": "Winter oilseed rape", "Crop_Func": "0", "Crop_Grown": 2, "Drilling": "0.33", "EDI": "0", "FID": 3, "F_S": "Needs improvement (Score: 1 out of 10)", "FieldScore": "3.66", "Field_Name": "Pike Hill", "S_H_S": "Fair (Score: 4.02 out of 10)", "Sec_1_Sum": 2.66, "Sec_2_Sum": "1", "SoilHealth": "2.33", "Status": "Needs improvement (Score: 1 out of 10)", "TotalScore": "No value"}, "type": "Feature"}, {"geometry": {"coordinates": [[[-0.32782238667422287, 51.793574694285674], [-0.3280842144654059, 51.793386106687734], [-0.32814907337044114, 51.793339819605976], [-0.32855818684050464, 51.79348485165208], [-0.3292017929167022, 51.79377183010074], [-0.3297156799986295, 51.79399709176353], [-0.3298304310026502, 51.79403720641058], [-0.33006492185717384, 51.793657655585875], [-0.33023954401581296, 51.793241072474565], [-0.3304740354909851, 51.792873858901345], [-0.3306037557754091, 51.792691792730714], [-0.3307185062288744, 51.792593045992966], [-0.33052392818731935, 51.79232457538443], [-0.33032934961205523, 51.791938838403816], [-0.33033074686503255, 51.791833053563316], [-0.3302732719976432, 51.79160197996745], [-0.33014874190552673, 51.7913432542498], [-0.33008487951624704, 51.79120105398056], [-0.32999228033008693, 51.791062802142456], [-0.329877329000605, 51.79094035106142], [-0.3298230459887352, 51.79093640117352], [-0.32974960672718245, 51.790823824072916], [-0.3296123037943264, 51.79065199596576], [-0.32953886204160804, 51.790499918112445], [-0.3294877729209438, 51.790381414288355], [-0.32885873648509567, 51.790478192776604], [-0.32841489760071013, 51.79057694489647], [-0.32781140535175174, 51.79071914857845], [-0.3274633585110779, 51.790800125267744], [-0.32723345810335336, 51.79088702634816], [-0.32693649997420726, 51.791011453546595], [-0.32656929690128317, 51.79119315533364], [-0.3263457803067001, 51.79129783123928], [-0.3261701601665776, 51.79136498116232], [-0.3259530313768405, 51.791422256295846], [-0.32582211523355, 51.79147360646817], [-0.3256560751666235, 51.79157235636732], [-0.32541659369224185, 51.79175603168803], [-0.325221815433006, 51.791904155439596], [-0.3249631749478748, 51.79207202834673], [-0.32465663877487244, 51.792285326095396], [-0.3244746337505247, 51.79244134767772], [-0.3242638901709696, 51.7926013187215], [-0.32402760362818156, 51.79277313923759], [-0.3239797072407381, 51.79284226216412], [-0.3237529978691299, 51.79293508451078], [-0.32352628926511046, 51.79300025749653], [-0.3232101738029729, 51.79317207638678], [-0.3229675002866992, 51.793290572208036], [-0.32277591480093276, 51.79344659030769], [-0.3224853444337926, 51.79369740321086], [-0.322293759007797, 51.793877120139314], [-0.32215326394612465, 51.794035110822115], [-0.32205427773274653, 51.79411410641962], [-0.3218946236418269, 51.7942227246293], [-0.3216168249289949, 51.794441935999046], [-0.3213869243381053, 51.79455450350332], [-0.32126878107450296, 51.79460585023737], [-0.32103568536626753, 51.79466509588321], [-0.32088880299884254, 51.7947124925123], [-0.3206780591993776, 51.794813210881955], [-0.32049605314425716, 51.7950027957089], [-0.3202980823184347, 51.79514695961584], [-0.319997933218846, 51.79541158714182], [-0.31989256126752486, 51.795455032898595], [-0.3196594667872447, 51.79558932131559], [-0.31946468869981876, 51.795707810234155], [-0.3192890689703512, 51.79586382073991], [-0.3194349295470159, 51.795942023168685], [-0.31976190065279625, 51.79610379779268], [-0.3200480013341257, 51.7962289210336], [-0.32032184039167166, 51.7963388767414], [-0.3205691119969666, 51.79643872193054], [-0.3208756478756819, 51.79655246957618], [-0.3211903591659057, 51.796675063589824], [-0.3215500268132219, 51.796811559236524], [-0.32185043124117485, 51.79693036115167], [-0.32207113876513677, 51.797012510555554], [-0.32216309892782685, 51.79704157891174], [-0.3222346236349358, 51.79705800940896], [-0.32230206252914995, 51.79705800963144], [-0.3230030063741336, 51.79702767687882], [-0.32331976050847, 51.79703399578811], [-0.3236119905740554, 51.79701630143732], [-0.32392670182994576, 51.79699355228048], [-0.3241841910800678, 51.79698976118422], [-0.3243742449671484, 51.79698849736013], [-0.32448664094882657, 51.796985969151514], [-0.3246439955273854, 51.796951845721885], [-0.3248176985890124, 51.796920248913594], [-0.32512219190171027, 51.79684189037958], [-0.3253960298950148, 51.79676353233337], [-0.3256269538868695, 51.79673067128885], [-0.32583335473006275, 51.79669781127552], [-0.32601318919949396, 51.79666495120531], [-0.3261828053488703, 51.79659543924888], [-0.32629928966870353, 51.79652845458611], [-0.32650160359148306, 51.79636541592062], [-0.32664669588484946, 51.796284529000935], [-0.3267550061355979, 51.796201114077896], [-0.3268919253292282, 51.79609747651838], [-0.3269757113409907, 51.796002686269404], [-0.3270983261605524, 51.795890200806944], [-0.3271964169869301, 51.795825743784725], [-0.3272209406909869, 51.795781507183136], [-0.3272454633371003, 51.795661438370765], [-0.32724137576030965, 51.79553125910544], [-0.3272413762188903, 51.795401078654955], [-0.3272454638599841, 51.795283536306144], [-0.32725159412572563, 51.79514324422452], [-0.3272658986587985, 51.795028229246114], [-0.3272965519871137, 51.79490310325795], [-0.3273272065604191, 51.794788087998334], [-0.3273251628670868, 51.79472994835663], [-0.32726794206226345, 51.79469582208242], [-0.3271718942035544, 51.794607348960824], [-0.32711467438015124, 51.794536569012315], [-0.32704314978926147, 51.79444935922659], [-0.3269965710211239, 51.794367382604136], [-0.32715123594173523, 51.794163722731405], [-0.32769006780623583, 51.793669999727165], [-0.32782238667422287, 51.793574694285674]]], "type": "Polygon"}, "id": 4, "properties": {"Adj_Fields": "4", "BSI": "1", "B_D_S": "Excellent (Score: 10 out of 10)", "BiodiScore": "5.66", "Break_Crop": "0.33", "Crop_2016": "Beans", "Crop_2017": "Winter wheat", "Crop_2018": "Winter barley", "Crop_2019": "Winter oilseed rape", "Crop_2020": "Winter wheat", "Crop_2021": " Winter oats", "Crop_2022": "Winter wheat", "Crop_Func": "2", "Crop_Grown": 3, "Drilling": "No drilling dates", "EDI": "-1", "FID": 4, "F_S": "Excellent (Score: 10 out of 10)", "FieldScore": "9.33", "Field_Name": "Pond Great Hills", "S_H_S": "Excellent (Score: 10 out of 10)", "Sec_1_Sum": 5.33, "Sec_2_Sum": "4", "SoilHealth": "3.66", "Status": "Excellent (Score: 10 out of 10)", "TotalScore": "No value"}, "type": "Feature"}], "type": "FeatureCollection"});

        
    
    geo_json_9c36a7630de8b3bf1a0f592956aab40e.bindTooltip(
    function(layer){
    let div = L.DomUtil.create('div');
    
    let handleObject = feature=>typeof(feature)=='object' ? JSON.stringify(feature) : feature;
    let fields = ["Status", "Crop_2016", "Crop_2017", "Crop_2018", "Crop_2019", "Crop_2020", "Crop_2021", "Crop_2022", "EDI", "FieldScore"];
    let aliases = ["Status", "Crop_2016", "Crop_2017", "Crop_2018", "Crop_2019", "Crop_2020", "Crop_2021", "Crop_2022", "EDI", "FieldScore"];
    let table = '<table>' +
        String(
        fields.map(
        (v,i)=>
        `<tr>
            <th>${aliases[i]}</th>
            
            <td>${handleObject(layer.feature.properties[v])}</td>
        </tr>`).join(''))
    +'</table>';
    div.innerHTML=table;
    
    return div
    }
    ,{"className": "foliumtooltip", "sticky": true});
                     
    
            var layer_control_d78f703df28b33e5037e11987159073a = {
                base_layers : {
                    "openstreetmap" : tile_layer_a53cad7b9899458b70943def4d5696e8,
                    "Mapbox Satellite Streets" : tile_layer_17973779838e6e4424e74be4626a60d7,
                },
                overlays :  {
                    "Field Boundaries" : geo_json_9c36a7630de8b3bf1a0f592956aab40e,
                },
            };
            L.control.layers(
                layer_control_d78f703df28b33e5037e11987159073a.base_layers,
                layer_control_d78f703df28b33e5037e11987159073a.overlays,
                {"autoZIndex": true, "collapsed": true, "position": "topright"}
            ).addTo(map_282e637f7b79ea2f336cb92dff3454ff);
            tile_layer_17973779838e6e4424e74be4626a60d7.remove();
