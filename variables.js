//restricted characters in saved variables [¦,§,°] (used for save data)
//using strings as arrays split characters [! ~ . ,] (mostly depends on the variable,! is most common) , is reserved in tmp arrays and chunk data
//every variable defined as an array should only be an array | every array should be integers (int) or strings (str), but not both

//script variables
version='dev'//str currently does nothing
t=''//str js convert to html game text (save/load)
n=''//str js convert to html game navigation (save/load)
sidemenu=0//str keeps track of what menu is open
u=undefined
x='none'//used to simplify script | 'none' is used instead of empty strings in variables/arrays because of saving and loading problems
strv=['tmp','saving','combat','safe','w','_','savename']//variables to initialize and save as strings (tmp is used by scenes, saving is for disabling the save menu, w is for simplifying the file path _ is the path of the last scene used)
numv=['tmpn','namegennum','fsize','cworldid','mwsize','money','savenum']//variables to initialize and save as numbers (tmpn is used by scenes namegennum is the selected name generator, fsize is font size, cworldid is the index of the current world)
tmpa=[x]//a string array for use across scenes
tmpan=[0]//a number array for use across scenes

//save/load arrays
saves=[0,0,0,0,0,0,0]//used to track saves
ss=[x,'T','F','F','world/',x,'save']//default values for stringv varibles
sn=[0,1,16,0,2,0,0]//default values for numv variables
arrn=['tmpan','tech','afft','affr','afflvl','affxp','atk','def','hp','ep','sp','itma','itmt','itmr','mata','matt','matf','matc','matr','pid','pfav','lvl','age','pxp','qloc','wid','wsize','pos','time','ids','sn']//number array names (save/load)
arrs=['tmpa','aff','itm','itmd','eqp','mat','psn','race','ptag','ptagd','qname','qdata','wname','wchunk','wchunkd','wppl','chunk','chunkd','imgv','ss']//string array names (save/load)
sv=[[],[],'','',version]// used in save/load functions

//arrays player
tech=[0,-1,-1,-1,-1,-1,-1,-1]//int index of the associated affinity [weaponP, weaponE, weaponS, faith, body, energy, spiritual, effect]
aff=['Hands']//str affinity name (basically a skill name)
afft=[1]//int affinity type (0=none,1=weaponP,2=weaponE,3=weaponS,4=weaponF,5=physical,6=energy,7=spiritual,8=faith,9=effect,10=skill)
affr=[8]//int affinity rarity (similar to item rarity, 9 is special and means no xp growth) (Acts as a multiplier for certain effects)
afflvl=[1]
affxp=[0]
atk=[0,0,0]//attack[hp,ep,sp]
def=[0,0,0]//defense[hp,ep,sp]
hp=[5,5,1]//current,max,level/regen
ep=[5,5,1]
sp=[5,5,1]
eqp=[0,0]//int weaponid, clothesid

//arrays items
itm=[x]//str item name
itma=[0]//int item amount
itmt=[3]//int item type
itmr=[7]//int rarity (0=rare upto 8=notrare or 9=black)
itmd=[x]//str item data (split by !) (data should depend on the item type)

//arrays materials
mat=[x]//str material name
mata=[0]//int material amount
matt=[0]//int material affinity type (5-7 | physical,energy,spiritual)
matf=[0]//int material form (0=none,1=ingot,ect)
matc=[0]//int material crafting usage (0=Cooking,1=Smithing,etc)
matr=[8]//int rarity (0=rare upto 8=notrare or 9=black)

//arrays quests
qname=[x]
qloc=[-1]
qdata=[x]

//arrays person
pid=[0]//int
psn=[x]//str name
race=['000']//str race+variant+sex (0f,1m)
pfav=[0]//int personal reputation/favor
lvl=[1]//int level
age=[0]//int age in years
pxp=[0]//int experience to level
ptag=[x]//str tag!tag ex:immortal!follow
ptagd=[x]//str tagdata!tagdata

//arrays worlds
wid=[0]//int the unique world number
wname=[x]//str world name
wsize=[1]//int world chunk amount square ex: 3 for 3*3
wchunk=[x]//str combined chunks [chunk~chunk]
wchunkd=[x]//str combined chunk data [chunk~chunk]
wppl=[x]//for saving and loading the people of each world

//loaded current world data
chunk=['forest!city!cave']//chunk location data [terrain!major!minor]
chunkd=['!!']//chunk data [data ! data major ! data minor] . is used to split inner data

//arrays general
imgv=[x]//the images used in the character frame
pos=[0,0,0]//X,Y,Direction(0=N,7=NW)
time=[0,0,0,0,0]//int m/h/D/M/Y

//script arrays
ids=[0,0]//int the highest number id used (pid/wid)
cc=['#B44','#B4B','#B80','#BB4','#4B4','#44B','#4BB','#BBB','#888','#000']//color codes for stat number, etc
ncon1=['b','ch','d','f','g','h','j','k','l','m','n','p','q','qu','r','s','sh','t','v','w','x','y','z']
ncon2=['ba','be','bi','bo','bu','fu','chi','cho','chu','ge','gi','go','gu','ha','he','hi','ho','ji','jo','ju','ka','ke','ki','ko','ku','ma','me','mi','mo','mu','na','ne','ni','no','nu','pa','pe','pi','po','pu','ra','re','ri','ro','ru','sa','se','so','su','shi','sho','shu','ta','te','to','tsu','wa','za','ze','zo','zu']
ncon3=['el','la','v','an','or','ar','ri','ice','is','er','st','al','ea','b','no','ma','d','ol','lo','o','on','fe','br','ay','ly','e','and','l','tr','ur','en','he','y','lt','in','og','gre','a','ra','f']
nvow1=['a','an','ang','ao','e','en','eng','ei','i','in','o','ong','u','uo','ua']
cfimg=["bgimg","tail","eff1","body","eff2","eyes","hair","back","bottom","top","hair2"]//the image layers to load in the character frame
races=['Demon','Abyss','Human','Spirit']
racev=[['Demon','Succubus','Zombie','Vampire'],['Abyss','Curse','Mimic','Slime'],['Human','Fox','Dog','Cat'],['Spirit','Ghost','God','Elemental']]
matform=[x,'ingot','bottle','crystal','bag','chunk','ball','roll']//the type of container for a material
afftype=[x,'physical attack','energy attack','spiritual attack','faith','physical','energy','spiritual','effect','skill']
matcraft=[x,'Smithing','Alchemy','Imbuing']//crafting uses for materials
terrains=['desert','forest','jungle','mountains','plains','snow']//update this list after adding terrains
majorfeatures=['city','fort','sect','village']
minorfeatures=['forbidden zone','cave','cemetery','monster den','compound','labyrinth','lake','portal','shelter','shrine']//ruin isn't included in world gen
monsters=['Ooze','Snake','Winder','Tendrid','Spider','Wolf','Worm','Plantel','Scorpion','Bear','Wraith','Troll','Yokai','Dragon']
monsterattack=['acid','fangs','wind','vine','bite','bite','bite','mist','stinger','claws','wraith mist','fist','curse','dragon breath']
monsterstats=['0.1.0.1.0.1.5.6.5','1.0.0.0.1.1.5.5.6','0.1.1.0.0.0.5.5.5','1.1.0.0.0.0.5.5.6','2.0.0.0.0.0.5.5.6','2.0.0.0.1.1.7.7.6','2.1.0.0.0.1.7.7.6','0.2.2.0.0.0.7.6.7','2.1.0.1.0.0.8.6.6','3.0.0.1.1.0.9.8.7','0.0.3.2.0.0.7.7.10','3.2.0.0.0.0.8.8.8','0.2.2.0.1.0.10.7.7','1.1.1.1.1.1.8.10.10']
monstergrowth=['0.1.0.1.0.0.1.2.1','0.1.0.0.0.0.2.2.1','0.1.1.1.0.0.1.1.1','1.1.0.0.0.0.2.1.1','0.1.0.1.0.0.1.2.1','1.0.0.0.0.0.2.2.2','1.1.0.0.0.1.1.2.0','0.1.1.0.1.0.1.1.1','0.1.0.1.0.1.1.1.1','2.0.0.1.1.1.1.1.1','0.0.2.1.1.1.1.1.1','1.1.0.0.0.0.2.2.2','0.1.1.1.1.1.0.1.1','1.1.1.1.1.1.1.1.1']
monsterloot=['Ooze Acid.6.2.2','Snake Scale.6.4.1','Winder Core.7.0.1','Tendrid Vine.5.0.1','Spider Venom.5.0.2','Wolf Fur.5.7.1','Worm Skin.6.7.1','Plantel Core.7.0.1',x,x,x,x,x,x]
monstervariants=[x,'Spikey','Ice','Ash','Ground','Metal','Stone','Green','Brown','Poison','Water','Fire','Plant','Mud','Sand','Red','Yellow','Illusory','Mist','Smoke','Death','Wind','Dust','Pink','Blue','Dark','Light','White','Black']
monstervariantbonus=[-1,0,3,0,3,3,3,0,0,1,4,1,4,4,4,1,1,2,2,5,2,2,5,5,5,-1,-1,-1,-1]
monstervariantloot=[x,'spike','crystal','ash','flower','chunk','stone','blood','blood','poison','water','flame','fiber','mud','sand','essence','blood','crystal','mist','smoke','blood','core','dust','crystal','crystal',x,x,x,x]
monstervariantlootcraft=[0,1,3,1,2,1,1,2,2,3,2,3,1,2,1,3,2,1,3,3,2,2,3,1,1,0,0,0,0]
lootlevels=['Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade ?']
direction=['North','Northeast','East','Southeast','South','Southwest','West','Northwest']
rdirection=[1,1,0,-1,-1,-1,0,1,0,1,1,1,0,-1,-1,-1]//used in loc function
sex=['Female','Male']

//script category arrays
world=['wid','wname','wsize','wchunk','wppl']
item=['itm','itma','itmt','itmr','itmd']
itype=['Weapon','Clothes','Consumable','Item','Valuable','Food','Tool','Book']//equip:(slots type)XstatXnumXetc,charm:truthyXeval,consumable:statXnumXetc,item:nothing,consumable:eval,material:amountXtypeX(affinityXlevel)
affinity=['aff','afft','affr','afflvl','affxp']
person=['pid','psn','race','pfav','lvl','age','pxp','ptag','ptagd']
material=['mat','mata','matt','matf','matc','matr']
quests=['qname','qloc','qdata']