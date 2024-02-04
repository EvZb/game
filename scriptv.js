
//script variables
t=''//str js convert to html game text (save/load)
n=''//str js convert to html game navigation (save/load)
m=0//str keeps track of what menu is open
x='none'//just use x in place of 'none'
w='none/'//world name (name/) used in file paths
arrpn=[x,x,'body','pfav','sex',x,'lvl','pxp','age']//used in ppl() to indicate int arrays
setting=[16]
imgs=['background','environment','back','tail','aura','body','skin','eyes','pendant','hair','horn','bottom','top','hat']
//arrays player
imgv=['x']//the images used in the character frame
stat=[1]//int money
trt=['trait name']//str
trtl=[0]//int trait levels
trtx=[0]//int trait xp levels
itm=['Name']//str item name (item names are unique for each item)
itmd=['Description']//str
itmt=[3]//int item type equipment, charm, consumable, item, consumable
itme=['item effects']//str equipment: XX,charm: XX, consumable:, item: XX, consumable: XX
itma=[0]//int item amount
itmr=[8]//in rarity (0=rare upto 8=notrare or 9=black)
eqp=[x,x,x,x,x]//str (slots)
//arrays person
psn=['name']//str
psna=['00000']//str affinities
body=[0]//int body variant
pfav=[0]//int personal reputation/favor
sex=[0]//0 none/1 m/2 f
ptrt=['202540002000']//each digit represents a trait level 0-9 for npcs
lvl=[0]//int level
pxp=[0]//int experience to level
age=[0]//int age
//arrays worlds
worlds=[x]//str world name
wgen=[x]//str world generated areas
wppl=[x]//for saving and loading the people of each world
weight=[0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,5,5,5,6,6,7,7,8,9]//used for rng wieghting ex: weight[rng(31)]
//arrays general
time=[0,0,0,0]//int Y/D/h/m
kie=['ki type in location']//str
kiv=[0]//int ki type values in location
//script arrays/objects
stringv=['tmp','tmp2','ally','w','pname']//variables to initialize and save as strings
numv=['tmpn','ngen','hp','hpm','ep','epm','sp','spm','kp','kpm']//variables to initialize and save as numbers
ss=[x,x,x,x,x]//default values for stringv varibles
sn=[0,1,1,1,1,1,1,1,1,1]//default values for numv variables
arrn=['sn','pfav','sex','itma','itmt','itmr','time','trtl','trtx','kiv','body','lvl','pxp','dgr','stat','hp','ep','ki']//number array names (save/load)
arrs=['ss','newpsn','psn','psnp','psna','trt','kie','slot','eqp','itme','itmd','itm','imgv']//string array names (save/load)
newpsn=[]//names of temporary npcs (psn)
saves=[0,0,0,0,0,0,0]//used to track saves
sv=[[],[],[],[],'','']// used in save/load functions
cc=['#B44','#B4B','#B80','#BB4','#4B4','#44B','#4BB','#BBB','#888','#000']//color codes for stat number, etc
ncon1=['b','ch','d','f','g','h','j','k','l','m','n','p','q','qu','r','s','sh','t','v','w','x','y','z']
ncon2=['ba','be','bi','bo','bu','fu','chi','cho','chu','ge','gi','go','gu','ha','he','hi','ho','ji','jo','ju','ka','ke','ki','ko','ku','ma','me','mi','mo','mu','na','ne','ni','no','nu','pa','pe','pi','po','pu','ra','re','ri','ro','ru','sa','se','so','su','shi','sho','shu','ta','te','to','tsu','wa','za','ze','zo','zu']
ncon3=['a','a','a','a','b','c','d','e','e','e','e','f','g','h','i','i','i','i','j','k','l','m','n','o','o','o','o','p','q','r','s','t','u','u','u','u','v','w','x','y','z']
nvow1=['a','an','ang','ao','e','en','eng','ei','i','in','o','ong','u','uo','ua']
cfimg=["bgimg","back","eff1","body","eff2","eyes","hair","bottom","top"]//the image layers to load in the character frame
//descriptors
desc={
aff:[['light','growth','water'],['shade','poison','fire'],['electric','air','cold'],['blood','metal','space'],['psy','evil','moon']],
body:['Human','Demon','Abyss','Beast','Ghost'],
atype:['good','death','chaos','neutral','soul'],
itypes:['equipment','charm','consumable','item','consumable'],//equip:(slots type)XstatXnumXetc,charm:truthyXeval,consumable:statXnumXetc,item:nothing,consumable:eval
slots:['top','bottom','pendant','weapon','ranged','hidden','soul'],
psn:['psn','psna','body','pfav','sex','ptrt','lvl','pxp','age'],
itm:['itm','itmd','itmt','itma','itmr','itme'],
traits:['healthiness','knowledge','strength','loyalty','charm','skill','reputation','popularity','spirit','luck','femininity','masculinity'],//scale 0-9
health:['dying','sick','unhealthy','unhealthy','normal','normal','healthy','healthy','energetic','lively'],
knowledge:['non exsistant','childish','stupid','uninformed','standard','informed','educated','knowledgeable','wise','wisest'],
strength:['extremely weak','very weak','weak','normal','normal','good','strong','very strong','great','zenith'],
loyalty:['villainous','betrayer','untrustworthy','normal','normal','okay','good','trustworthy','loyal','dedicated'],
charm:['repulsive','very bad','bad','negative','uninteresting','normal','interesting','charming','alluring','captivating'],
skill:['incapable','very bad','no good','clumsy','below average','average','decent','capable','skillful','perfected'],
rep:['fiend','evil','bad','negative','neutral','neutral','positive','good','vituous','saint'],
popularity:['forgotten','unknown','mostly unknown','normal','above normal','known','notable','popular','famous','legendary'],
spirit:['destroyed','broken','weak','normal','normal','normal','strong','willful','oberpowering','unstoppable'],
luck:['cursed','bad','unlucky','lacking','normal','above normal','good','lucky','very lucky','the chosen one']}
//desctraitexample=['','','','','','','','','','']