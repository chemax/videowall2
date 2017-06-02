var port = 3000; // Указываем порт на котором у на стоит сокет
    
// var socket = io.connect('http://192.168.22.239:' + port); // Тут мы объявляем "socket" (дальше мы будем с ним работать) и подключаемся сразу к серверу через порт
var socket = io.connect('ws://192.168.22.239:' + port); // Тут мы объявляем "socket" (дальше мы будем с ним работать) и подключаемся сразу к серверу через порт

var imgW = 250;
var imgH = 200;
var filesList = ["andat-autokpp","andat-in_kpp","andat-kpp","andat-pk-19","andat-pk-700","andat-polygon","andat-sklad_gsm","andat-vashgerd","bak_cam200","bak_cam201","bak_cam202","bak_cam203","bak_cam204","bak_cam205","bak_cam206","bak_cam207","bak_cam208","bak_cam209","bak_cam210","bak_cam211","bak_cam212","bak_cam213","bak_cam214","bak_cam215","bak_cam216","bak_cam217","bak_cam218","bak_cam219","bak_cam220","bak_cam222","bak_cam223","bak_cam224","bak_cam225","bak_cam226","bak_cam227","bak_cam228","bak_cam229","bak_cam230","bak_cam231","bak_cam232","bak_cam233","bak_cam234","baliksa-in-kpp","baliksa-kpp-vezd","baliksa-kypol","baliksa-sklad-gsm","baliksa-vesi","baliksa-zpk-dvor","baliksa-zpk-koridor","baliksa-zpk","ilinka-in-kpp","ilinka-kpp","karagan-zpk-dvor","karagan-zpk-kassa","makar-gep5","makar-gep8","makar-in_kpp","makar-kpp","makar-kypol","mamon-gsm","mamon-in_kpp","mamon-kpp","mamon-vashgert1","ozerka-11","ozerka-13","ozerka-autonomera","ozerka-dovod4ik","ozerka-gep1","ozerka-in_kpp","ozerka-kassa","ozerka-kassa2","ozerka-kpp","ozerka-kypol","ozerka-otval","ozerka-plavilka","ozerka-shatl201","ozerka-shatl202","ozerka-shatl203","ozerka-shatl_stolb_zpk","ozerka-sklad","ozerka-sklad_out","ozerka-zgm1","ozerka_sklad-out","piht-kpp-ulica","piht-kpp","piht-kypol","piht-pk13","piht-pk15","piht-pk16","piht-pk17","posolka-hikvision","qundat-zpk-ulica","qundat-zpk-vesi","quway-in_kpp","quway-kypol","quway-pk9","quway-shdu","quway-stoli","quway-vesi","quway-vhod_zpk","seyba-in_kpp","seyba-kpp","seyba-shoy-vhod","sisim-gep6","sisim-in_kpp","sisim-kpp","tuht-gep4","tuht-kpp","tuht-obsh","tuht-poligon","tuht-rem_ploshadka","tuht-shdu1","tuht-shdu2","tuht-shdu3","tuht-zpk1","tuht-zpk2","tuht-zpk3","tuht-zpk4"];
var username = 'chemax';
var urlArray = {"andat-kpp":"94.232.52.203:9010\/","andat-autokpp":"94.232.52.203:9020\/","andat-in_kpp":"94.232.52.203:9031\/","andat-polygon":"94.232.52.203:8090\/","andat-vashgerd":"94.232.52.203:9040\/","andat-pk-700":"94.232.52.203:9050\/","andat-sklad_gsm":"94.232.52.203:9060\/","andat-pk-19":"94.232.52.203:9070\/","tuht-poligon":"94.232.52.202:8090\/","tuht-kpp":"94.232.52.202:9107\/","tuht-obsh":"94.232.52.202:10005\/","tuht-gep4":"94.232.52.202:9106\/","tuht-zpk1":"94.232.52.202:9101\/","tuht-zpk2":"94.232.52.202:9102\/","tuht-zpk3":"94.232.52.202:9103\/","tuht-shdu1":"94.232.52.202:9110\/","tuht-shdu2":"94.232.52.202:9111\/","tuht-shdu3":"94.232.52.202:9112\/","tuht-zpk4":"94.232.52.202:9104\/","tuht-rem_ploshadka":"94.232.52.202:9113\/","piht-kypol":"94.232.52.204\/","piht-kpp":"94.232.52.204:9099\/","piht-kpp-ulica":"94.232.52.204:8080\/","piht-pk16":"94.232.52.202:8092\/","piht-pk17":"94.232.52.202:8091\/","piht-pk13":"94.232.52.204:8090\/","piht-pk15":"94.232.52.204:8091\/","baliksa-kpp-vezd":"31.10.9.249:9201\/","baliksa-in-kpp":"","baliksa-vesi":"31.10.9.249:9204\/","baliksa-zpk":"31.10.9.249:9203\/","baliksa-zpk-dvor":"31.10.9.249:9202\/","baliksa-zpk-koridor":"31.10.9.249:9206\/","baliksa-kypol":"31.10.9.249:9200\/","baliksa-sklad-gsm":"31.10.9.249:9205\/","ozerka-kpp":"46.29.199.148\/","ozerka-in_kpp":"46.29.199.158\/","ozerka-autonomera":"46.29.193.218:9205\/","ozerka-11":"46.29.199.147\/","ozerka-13":"46.29.199.152\/","ozerka-plavilka":"46.29.199.150\/","ozerka-kassa":"46.29.199.149\/","ozerka-otval":"46.29.199.154\/","ozerka-kypol":"46.29.199.156\/","ozerka-sklad":"46.29.199.151\/","ozerka-shatl201":"46.29.193.218:9201\/","ozerka-shatl202":"46.29.193.218:9202\/","ozerka-shatl203":"46.29.193.218:9203\/","ozerka-dovod4ik":"46.29.193.218:9206\/","ozerka-kassa2":"46.29.193.218:9207\/","ozerka-zgm1":"46.29.193.218:9208\/","ozerka-shatl_stolb_zpk":"46.29.193.218:9200\/","ozerka-gep1":"46.29.193.218:9209\/","ozerka-sklad_out":"46.29.193.218:9210\/","mamon-in_kpp":"185.17.37.240\/","mamon-gsm":"185.17.37.240:8092\/","ilinka-in-kpp":"185.17.36.229:9090\/","ilinka-kpp":"185.17.36.229:9091\/","ilinka-pk2":"185.17.36.229:9092\/","bezimyanka-gep1":"185.17.36.80:9091\/","bezimyanka-zgm1":"185.17.36.80:9090\/","posolka-hikvision":"185.17.36.8:9090\/","quway-in_kpp":"31.10.12.83:82\/","quway-vezd":"31.10.12.83:83\/","quway-kypol":"31.10.12.83:81\/","quway-vesi":"185.17.36.146:9020\/","quway-stoli":"185.17.36.146:9021\/","quway-shdu":"185.17.36.146:9024\/","quway-vhod_zpk":"185.17.36.146:9023\/","makar-in_kpp":"31.10.13.234:8081\/","makar-kpp":"31.10.13.234:8086\/","makar-kypol":"185.17.37.239:8085\/","seyba-kpp":"185.17.36.11:8081\/","seyba-in_kpp":"185.17.36.11:8086\/","seyba-shoy-dovodka":"185.17.36.11:8083\/","seyba-shoy-vhod":"185.17.36.11:8084\/","karagan-zpk-dvor":"185.17.36.94:9101\/","karagan-zpk-kassa":"185.17.36.94:9102\/","bak_cam225":"192.168.23.225\/","bak_cam200":"192.168.23.200\/","bak_cam201":"192.168.23.201\/","bak_cam208":"192.168.23.208\/","bak_cam202":"192.168.23.202\/","bak_cam218":"192.168.23.218\/","bak_cam203":"192.168.23.203\/","bak_cam204":"192.168.23.204\/","bak_cam205":"192.168.23.205\/","bak_cam206":"192.168.23.206\/","bak_cam207":"192.168.23.207\/","bak_cam209":"192.168.23.209\/","bak_cam210":"192.168.23.210\/","bak_cam211":"192.168.23.211\/","bak_cam212":"192.168.23.212\/","bak_cam213":"192.168.23.213\/","bak_cam214":"192.168.23.214\/","bak_cam215":"192.168.23.215\/","bak_cam216":"192.168.23.216\/","bak_cam217":"192.168.23.217\/","bak_cam219":"192.168.23.219\/","bak_cam220":"192.168.23.220\/","bak_cam223":"192.168.23.223\/","bak_cam224":"192.168.23.224\/","bak_cam226":"192.168.23.226\/","bak_cam227":"192.168.23.227\/","bak_cam228":"192.168.23.228\/","bak_cam229":"192.168.23.229\/","bak_cam230":"192.168.23.230\/","bak_cam231":"192.168.23.231\/","bak_cam232":"192.168.23.232\/","bak_cam233":"192.168.23.233\/","ilinka-pk1":"","sisim-in_kpp":"185.17.37.229:8081\/","sisim-kpp":"185.17.37.229:8086\/","qundat-zpk-ulica":"185.17.37.3:9100\/","qundat-zpk-vesi":"185.17.37.3:9101\/","quway-pk9":"","sisim-gep6":"","makar-gep5":"","makar-gep8":"","mamon-vashgert1":"","mamon-kpp":"","bak_cam234":"192.168.23.234\/"};
var camNameArray = {"andat-kpp":"[\u0410\u043d\u0434\u0430\u0442] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","andat-autokpp":"[\u0410\u043d\u0434\u0430\u0442] \u0410\u0432\u0442\u043e\u043d\u043e\u043c\u0435\u0440\u0430","andat-in_kpp":"[\u0410\u043d\u0434\u0430\u0442] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","andat-polygon":"[\u0410\u043d\u0434\u0430\u0442] \u041f\u043e\u043b\u0438\u0433\u043e\u043d","andat-vashgerd":"[\u0410\u043d\u0434\u0430\u0442] \u041f\u041a-9","andat-pk-700":"[\u0410\u043d\u0434\u0430\u0442] \u041f\u041a-700","andat-sklad_gsm":"[\u0410\u043d\u0434\u0430\u0442] \u0421\u043a\u043b\u0430\u0434 \u0413\u0421\u041c","andat-pk-19":"[\u0410\u043d\u0434\u0430\u0442] \u041f\u041a-19","tuht-poligon":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u041f\u043e\u043b\u0438\u0433\u043e\u043d","tuht-kpp":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","tuht-obsh":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","tuht-gep4":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u041f\u041a-14","tuht-zpk1":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u0417\u041f\u041a-1","tuht-zpk2":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u0417\u041f\u041a-2","tuht-zpk3":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u0417\u041f\u041a-3","tuht-shdu1":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u0428\u0414\u0423-1","tuht-shdu2":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u0428\u0414\u0423-2","tuht-shdu3":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u0428\u0414\u0423-3","tuht-zpk4":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u0412\u0435\u0441\u044b","tuht-rem_ploshadka":"[\u0422\u044e\u0445\u0442\u0435\u0440\u0435\u043a] \u0420\u0435\u043c \u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430","piht-kypol":"[\u041f\u0438\u0445\u0442\u0430\u0447\u0438] \u041f\u043e\u043b\u0438\u0433\u043e\u043d","piht-kpp":"[\u041f\u0438\u0445\u0442\u0430\u0447\u0438] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","piht-kpp-ulica":"[\u041f\u0438\u0445\u0442\u0430\u0447\u0438] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","piht-pk16":"[\u041f\u0438\u0445\u0442\u0430\u0447\u0438] \u041f\u041a-16","piht-pk17":"[\u041f\u0438\u0445\u0442\u0430\u0447\u0438] \u041f\u043a-17","piht-pk13":"[\u041f\u0438\u0445\u0442\u0430\u0447\u0438] \u041f\u041a-13","piht-pk15":"[\u041f\u0438\u0445\u0442\u0430\u0447\u0438] \u041f\u041a-15","baliksa-kpp-vezd":"[\u0411\u0430\u043b\u044b\u043a\u0441\u0430] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","baliksa-in-kpp":"[\u0411\u0430\u043b\u044b\u043a\u0441\u0430] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","baliksa-vesi":"[\u0411\u0430\u043b\u044b\u043a\u0441\u0430] \u0412\u0435\u0441\u044b","baliksa-zpk":"[\u0411\u0430\u043b\u044b\u043a\u0441\u0430] \u0417\u041f\u041a","baliksa-zpk-dvor":"[\u0411\u0430\u043b\u044b\u043a\u0441\u0430] \u0417\u041f\u041a \u0414\u0432\u043e\u0440","baliksa-zpk-koridor":"[\u0411\u0430\u043b\u044b\u043a\u0441\u0430] \u0417\u041f\u041a \u041a\u043e\u0440\u0438\u0434\u043e\u0440","baliksa-kypol":"[\u0411\u0430\u043b\u044b\u043a\u0441\u0430] \u041a\u0443\u043f\u043e\u043b","baliksa-sklad-gsm":"[\u0411\u0430\u043b\u044b\u043a\u0441\u0430] \u0421\u043a\u043b\u0430\u0434 \u0413\u0421\u041c","ozerka-kpp":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","ozerka-in_kpp":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","ozerka-autonomera":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0410\u0432\u0442\u043e\u043d\u043e\u043c\u0435\u0440\u0430","ozerka-11":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0428\u0430\u0442\u043b-2","ozerka-13":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0428\u0430\u0442\u043b \u0423\u043b\u0438\u0446\u0430","ozerka-plavilka":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u041f\u043b\u0430\u0432\u0438\u043b\u043a\u0430","ozerka-kassa":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u041a\u0430\u0441\u0441\u0430","ozerka-otval":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u041e\u0442\u0432\u0430\u043b","ozerka-kypol":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0417\u041f\u041a","ozerka-sklad":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0421\u043a\u043b\u0430\u0434","ozerka-shatl201":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0428\u0430\u0442\u043b-01","ozerka-shatl202":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0428\u0430\u0442\u043b-02","ozerka-shatl203":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0428\u0430\u0442\u043b-03","ozerka-dovod4ik":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0414\u043e\u0432\u043e\u0434\u0447\u0438\u043a","ozerka-kassa2":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u041a\u0430\u0441\u0441\u0430-2","ozerka-zgm1":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0417\u0413\u041c-1","ozerka-shatl_stolb_zpk":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0428\u0430\u0442\u043b \u0417\u041f\u041a \u0421\u0442\u043e\u043b\u0431","ozerka-gep1":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0413\u042d\u041f-1","ozerka-sklad_out":"[\u041e\u0437\u0435\u0440\u043d\u044b\u0439] \u0421\u043a\u043b\u0430\u0434 \u0412\u044b\u0445\u043e\u0434","mamon-in_kpp":"[\u041c\u0430\u043c\u043e\u043d] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","mamon-gsm":"[\u041c\u0430\u043c\u043e\u043d] \u0413\u0421\u041c","ilinka-in-kpp":"[\u0418\u043b\u0438\u043d\u043a\u0430] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","ilinka-kpp":"[\u0418\u043b\u0438\u043d\u043a\u0430] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","ilinka-pk2":"[\u0418\u043b\u0438\u043d\u043a\u0430] \u041f\u041a-2","bezimyanka-gep1":"[\u0411\u0435\u0437\u044b\u043c\u044f\u043d\u043a\u0430] \u0413\u042d\u041f-1","bezimyanka-zgm1":"[\u0411\u0435\u0437\u044b\u043c\u044f\u043d\u043a\u0430] \u0417\u0413\u041c-1","posolka-hikvision":"[\u041f\u043e\u0441\u043e\u043b\u044c\u043d\u044b\u0439] \u041a\u0443\u043f\u043e\u043b","quway-in_kpp":"[\u041a\u0443\u0432\u0430\u0439] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","quway-vezd":"[\u041a\u0443\u0432\u0430\u0439] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","quway-kypol":"[\u041a\u0443\u0432\u0430\u0439] \u041a\u0443\u043f\u043e\u043b","quway-vesi":"[\u041a\u0443\u0432\u0430\u0439] \u0412\u0435\u0441\u044b","quway-stoli":"[\u041a\u0443\u0432\u0430\u0439] \u0421\u0442\u043e\u043b\u044b","quway-shdu":"[\u041a\u0443\u0432\u0430\u0439] \u0428\u0414\u0423","quway-vhod_zpk":"[\u041a\u0443\u0432\u0430\u0439] \u0417\u041f\u041a \u0412\u0445\u043e\u0434","makar-in_kpp":"[\u041c\u0430\u043a\u0430\u0440\u0435\u0432\u043a\u0430] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","makar-kpp":"[\u041c\u0430\u043a\u0430\u0440\u0435\u0432\u043a\u0430] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","makar-kypol":"[\u041c\u0430\u043a\u0430\u0440\u0435\u0432\u043a\u0430] \u041a\u0443\u043f\u043e\u043b","seyba-kpp":"[\u0421\u0435\u0439\u0431\u0430] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","seyba-in_kpp":"[\u0421\u0435\u0439\u0431\u0430] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","seyba-shoy-dovodka":"[\u0421\u0435\u0439\u0431\u0430] \u0428\u041e\u0423 \u0414\u043e\u0432\u043e\u0434\u043a\u0430","seyba-shoy-vhod":"[\u0421\u0435\u0439\u0431\u0430] \u0428\u041e\u0423 \u0412\u0445\u043e\u0434","karagan-zpk-dvor":"[\u041a\u0430\u0440\u0430\u0433\u0430\u043d] \u0417\u041f\u041a \u0414\u0432\u043e\u0440","karagan-zpk-kassa":"[\u041a\u0430\u0440\u0430\u0433\u0430\u043d] \u0417\u041f\u041a \u041a\u0430\u0441\u0441\u0430","bak_cam225":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0410\u0432\u0442\u043e\u043d\u043e\u043c\u0435\u0440\u0430","bak_cam200":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0412\u0442\u043e\u0440\u043e\u0439 \u0432\u044b\u0435\u0437\u0434","bak_cam201":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430 \u043f\u0435\u0440\u0435\u0434 \u0441\u043a\u043b\u0430\u0434\u043e\u043c","bak_cam208":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","bak_cam202":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","bak_cam218":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430-2","bak_cam203":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041a\u043e\u0440\u0438\u0434\u043e\u0440","bak_cam204":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041a\u0430\u0441\u0441\u0430","bak_cam205":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0421\u043a\u043b\u0430\u0434 \u0411\u043e\u043b\u044c\u0448\u043e\u0439","bak_cam206":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0421\u043a\u043b\u0430\u0434 \u041c\u0435\u043b\u043e\u0447\u0435\u0432\u043a\u0430","bak_cam207":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041a\u0443\u043f\u043e\u043b","bak_cam209":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0426\u0435\u0445 \u0410-\u0441\u0435\u0440\u0432\u0438\u0441","bak_cam210":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041c\u0435\u0442\u0430\u043b\u043b\u043e\u0441\u043a\u043b\u0430\u0434","bak_cam211":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430-3","bak_cam212":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438\u044f-1","bak_cam213":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438\u044f-2","bak_cam214":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0421\u0442\u043e\u044f\u043d\u043a\u0430","bak_cam215":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0421\u0432\u0430\u0440\u043e\u0447\u043d\u044b\u0439 \u0446\u0435\u0445","bak_cam216":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430","bak_cam217":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0420\u0435\u043c \u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430","bak_cam219":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041a\u0443\u043f\u043e\u043b-2","bak_cam220":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041a\u0430\u0441\u0441\u0430-2","bak_cam223":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043a\u043b\u0430\u0434 \u041f\u043e\u0433\u0440\u0443\u0437\u043a\u0430","bak_cam224":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0446\u0435\u0445 \u0443\u043b\u0438\u0446\u0430","bak_cam226":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0412\u0445\u043e\u0434 \u0432 \u043a\u0430\u0434\u0440\u043e\u0432\u044b\u0439 \u0446\u0435\u043d\u0442\u0440","bak_cam227":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0412\u0445\u043e\u0434 \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f","bak_cam228":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0421\u0432\u0430\u0440\u043e\u0447\u043d\u044b\u0439 \u0446\u0435\u0445-2","bak_cam229":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438\u044f \u0421\u043f\u0440\u0435\u0446\u043f\u0440\u043e\u043c\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u043a\u0430","bak_cam230":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041a\u041f\u041f \u0417\u0430\u0431\u043e\u0440","bak_cam231":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043a\u043b\u0430\u0434-2","bak_cam232":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041a\u041f\u041f \u0421\u0442\u043e\u044f\u043d\u043a\u0430","bak_cam233":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u041f\u0440\u043e\u0435\u0437\u0434 \u0434\u043e \u041a\u041f\u041f","ilinka-pk1":"[\u0418\u043b\u0438\u043d\u043a\u0430] \u041f\u041a-1","sisim-in_kpp":"[\u0421\u0438\u0441\u0438\u043c] \u0412\u043d\u0443\u0442\u0440\u0438 \u041a\u041f\u041f","sisim-kpp":"[\u0421\u0438\u0441\u0438\u043c] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","qundat-zpk-ulica":"[\u041a\u0443\u043d\u0434\u0430\u0442] \u0417\u041f\u041a \u0423\u043b\u0438\u0446\u0430","qundat-zpk-vesi":"[\u041a\u0443\u043d\u0434\u0430\u0442] \u0417\u041f\u041a \u0412\u0435\u0441\u044b","quway-pk9":"[\u041a\u0443\u0432\u0430\u0439] \u041f\u041a-9","sisim-gep6":"[\u0421\u0438\u0441\u0438\u043c] \u0413\u042d\u041f-6","makar-gep5":"[\u041c\u0430\u043a\u0430\u0440\u0435\u0432\u043a\u0430] \u0413\u042d\u041f-5","makar-gep8":"[\u041c\u0430\u043a\u0430\u0440\u0435\u0432\u043a\u0430] \u0413\u042d\u041f-8","mamon-vashgert1":"[\u041c\u0430\u043c\u043e\u043d] \u0412\u0430\u0448\u0433\u0435\u0440\u0442-1","mamon-kpp":"[\u041c\u0430\u043c\u043e\u043d] \u041a\u041f\u041f \u0423\u043b\u0438\u0446\u0430","bak_cam234":"[26 \u0411\u0430\u043a\u0438\u043d\u0441\u043a\u0438\u0445] \u0417\u0430\u043b \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f"};

function createImg(name, img ) {
    if (typeof img == "undefined")
    {
        img = "";
    }
    id = name.replace(".", "_");
    cam = name.replace(".jpg", "");
    backgroundClass = name.replace(/-.+/, "").replace(/_.+/, "");
    //console.log(backgroundClass);
    var element = document.getElementById('img-' + id);
    if (!element) {

            url = "http://"+urlArray[cam];

        camName = "";
        if ( typeof camNameArray[cam] !== "undefined")
        {
            camName = camNameArray[cam];
        }
        else
        {
            camName = cam;
        }
        $('div#cameras').append('<span class="image ' + backgroundClass + ' hoverspan" style="width:' + imgW + '; height:' + imgH + '">'

            + '<img width="' + imgW + '" height="' + imgH + '"'
            + 'src="http://192.168.22.239/thumb/' + name + '" '
            + 'id="img-' + id + '" '
            + 'class="preview" '
            + 'onerror="this.src=\'gold.gif\'">'
            + '<h6 class="pic-name">'+camName+'</h6>'
            + '<a onclick="PopUpShow(this)" target=_blank class="left_button btn btn-success" role="button" data-tooltip="' + id + '">'
            + '<span class="glyphicon glyphicon-zoom-in"></span></a>'
            + '<a href="' + url + '" target=_blank class="left_button btn btn-info" '
            + 'role="button" data-tooltip="' + id + '" data-toggle="tooltip" title="Перейти в админку камеры">'
            + '<span class="glyphicon glyphicon-cog"></span></a>'
            //+'<a href="#" class="right_button btn btn-danger" role="button">правая</a>'

            + '</span>');
    }
    else {
        $('#img-' + id).attr("src", img.src);
        $('#img2-' + id).attr("src", img.src);
        //console.log('img-'+id);
    }
};


socket.on('connect', function () {
    console.log('connect establish!');
    socket.emit('username', username);
	for (var i = 0; i < filesList.length; i++) {
        createImg(filesList[i] + '.jpg');
        //console.log(files[i]);
    }
    socket.emit('files-block', filesList);
});

socket.on('files', function (files) {

    for (var i = 0; i < files.length; i++) {
        createImg(files[i]);
        //console.log(files[i]);
    }
});

socket.on("image", function (info) {
    if (info.image) {
        var img = new Image();
        img.src = 'data:image/jpeg;base64,' + info.buffer;
        createImg(info.filename, img);
    }
});

$(document).ready(function () {
    PopUpHide();
});

function PopUpShow(e) {

    data_tooltip = e.getAttribute("data-tooltip");
    src = 'http://192.168.22.239/' + data_tooltip.replace(/_jpg/, ".jpg");
    if ( typeof camNameArray[data_tooltip.replace(/_jpg/, "")] !== "undefined")
    {
        camName = camNameArray[data_tooltip.replace(/_jpg/, "")];
    }
    else
    {
        camName = data_tooltip.replace(/_jpg/, "");
    }

    $('h2.popup-img').replaceWith(
        '<h2 class="popup-img">'+camName+'</h2>'
    );
    $('img.popup-img').replaceWith('<img class="popup-img" src="' + src + '" width="800" align="center" id="img2-' + data_tooltip + '" onerror="this.src=\'gold.gif\'">');
    $("#popup1").show();
}
function PopUpHide() {
    $('img.popup-img').replaceWith('<img class="popup-img">');
    $("#popup1").hide();
}

$(document).mouseup(function (e) {
    var container = $("div.b-popup-content");
    if (container.has(e.target).length === 0) {
        PopUpHide();
        //container.hide();
    }
});

function actionOnClickAdmin(button) {
    console.log("click on " + "http://localhost:61337/" + datasheet[button.variable + '.jpg']['url'].replace('http://', ""));
    window.open("http://localhost:61337/" + datasheet[button.variable + '.jpg']['url'].replace('http://', ""));
    // this.key();
}

function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        return true;
        //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    }
    else  // If another browser, return 0
    {
        //alert('otherbrowser');
        return false;
    }

    return false;
}