//restricted characters in save variables [¦,§,°] (used for save data)
//using strings as arrays split characters [! ~ . ,] (mostly depends on the variable,! is most common) , is reserved in tmp arrays
//every variable defined as an array should only be an array | every array should be either integers (int) or strings (str), but not both
//script variables
version='0 (DEV)'//str currently does nothing
t=''//str js convert to html game text (save/load)
n=''//str js convert to html game navigation (save/load)
m=0//str keeps track of what menu is open
x='none'//used to simplify script | 'none' is used instead of empty strings in variables/arrays because of saving and loading problems
strv=['tmp','saving','combat','w','_']//variables to initialize and save as strings (tmp is used by scenes, saving is for disabling the save menu, w is for world type in file path _ is the path of the last scene used)
numv=['tmpn','namegennum','fsize','cworldid','mwsize']//variables to initialize and save as numbers (tmpn is used by scenes namegennum is the selected name generator, fsize is font size, cworldid is the index of the current world)
tpma=[x]//a string array for use across scenes
tmpan=[0]//a number array for use across scenes
//arrays player
tech=[0,-1,-1,-1,-1,-1,-1,-1]//int index of the associated affinity [weaponP, weaponE, weaponS, faith, body, energy, spiritual, effect]
stat=[0,0]//int [0=money]
aff=['Hands']//str affinity name (basically a skill name)
afft=[1]//int affinity type (0=none,1=weaponP,2=weaponE,3=weaponS,4=weaponF,5=physical,6=energy,7=spiritual,8=faith,9=effect,10=skill)
affr=[8]//int affinity rarity (similar to item rarity, 9 is special and means no xp growth) (Acts as a multiplier for certain effects)
afflvl=[1]
affxp=[0]
atk=[0,0,0]//attack[hp,ep,sp]
def=[0,0,0]//defense[hp,ep,sp]
hp=[5,5,0]//current,max,level(level may be used for growth)
ep=[5,5,0]
sp=[5,5,0]
//arrays items
itm=[x]//str item name
itma=[0]//int item amount
itmt=[3]//int item type
itmr=[8]//int rarity (0=rare upto 8=notrare or 9=black)
itmd=[x]//str item data (data should depend on the item type)
eqp=[x,x,x]//str (slots)
//arrays materials
mat=[x]//str material name
mata=[0]//int material amount
matt=[0]//int material affinity type (5-7 | physical,energy,spiritual)
matf=[0]//int material form (0=none,1=ingot,ect)
matc=[0]//int material crafting usage (0=Cooking,1=Smithing,etc)
matr=[8]//int rarity (0=rare upto 8=notrare or 9=black)
//arrays person
pid=[0]//int
psn=[x]//str name
psna=[x]//str [organization name!organization level!specialty!specialty level]
psnl=[x]//str location ex:'00' xy
ptrt=['000000']//str ['character,luck,charm,personality,fame,knowledge'](ptrait) characters representing different trait values
peqp=[x]//str ['weapon!weapon value!clothes!clothing value']
race=['00']//str race+variant
pfav=[0]//int personal reputation/favor
lvl=[0]//int level
age=[0]//int age in years
pxp=[0]//int experience to level
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
tmppsn=[x]//str ['name!age!ptrt']
time=[0,0,0,0,0]//int m/h/D/M/Y
//script arrays/objects
ids=[0,0]//int the highest number id used (pid/wid)
saves=[0,0,0,0,0,0,0]//used to track saves
ss=[x,'T','F','world/',x]//default values for stringv varibles
sn=[0,1,16,0,2]//default values for numv variables
arrn=['tmpan','tech','stat','afft','affr','afflvl','affxp','atk','def','hp','ep','sp','itma','itmt','itmr','mata','matt','matf','matc','matr','pid','pfav','lvl','age','pxp','wid','wsize','pos','time','ids','sn']//number array names (save/load)
arrs=['tmpa','aff','itm','itmd','eqp','mat','psn','psna','psnl','ptrt','peqp','race','wname','wchunk','wchunkd','wppl','chunk','chunkd','imgv','tmppsn','ss']//string array names (save/load)
sv=[[],[],[],[],'','']// used in save/load functions
cc=['#B44','#B4B','#B80','#BB4','#4B4','#44B','#4BB','#BBB','#888','#000']//color codes for stat number, etc
ncon1=['b','ch','d','f','g','h','j','k','l','m','n','p','q','qu','r','s','sh','t','v','w','x','y','z']
ncon2=['ba','be','bi','bo','bu','fu','chi','cho','chu','ge','gi','go','gu','ha','he','hi','ho','ji','jo','ju','ka','ke','ki','ko','ku','ma','me','mi','mo','mu','na','ne','ni','no','nu','pa','pe','pi','po','pu','ra','re','ri','ro','ru','sa','se','so','su','shi','sho','shu','ta','te','to','tsu','wa','za','ze','zo','zu']
ncon3=['el','la','v','an','or','ar','ri','ice','is','er','st','al','ea','b','no','ma','d','ol','lo','o','on','fe','br','ay','ly','e','and','l','tr','ur','en','he','y','lt','in','og','gre','a','ra','f']
nvow1=['a','an','ang','ao','e','en','eng','ei','i','in','o','ong','u','uo','ua']
cfimg=["bgimg","tail","eff1","body","eff2","eyes","hair","back","bottom","top","hair2"]//the image layers to load in the character frame
ptrait=['character(0Bad,1Neutral,2Good)','luck(0Bad,1Poor,2Normal,3Good,#Extreme)','charm(0Bad,1Low,2Normal,3Good,4High)','personality(0)','fame(0Unknown,1Low,2Medium,3High,4Exreme)','knowledge(0Stupid,1Poor,2Normal,3Good,Very Good)']
races=['Demon','Abyss','Human','Spirit']
racev=[['None','Succubus','Zombie','Vampire'],['None','Curse','Mimic','Slime'],['None','Fox','Dog','Cat'],['None','Ghost','God','Elemental']]
matform=[x,'ingot','bottle','crystal','bag','chunk','ball','stack']//the type of container for a material
afftype=[x,'physical attack','energy attack','spiritual attack','faith','physical','energy','spiritual','effect','skill']
matcraft=['Cooking','Smithing','Formation']//crafting uses for materials
terrains=['desert','forest','jungle','mountains','plains','snow']//update this list after adding terrains
majorfeatures=['city','fort','mine','sect','village']
minorfeatures=['ancient','cave','cemetery','den','empty','hideout','labyrinth','lake','portal','shelter','shrine']
direction=['North','Northeast','East','Southeast','South','Southwest','West','Northwest']
rdirection=[1,1,0,-1,-1,-1,0,1,0,1,1,1,0,-1,-1,-1]
//script category arrays
world=['wid','wname','wsize','wchunk','wppl']
item=['itm','itma','itmt','itmr','itmd']
itype=['Equipment','Charm','Consumable','Item','Consumable']//equip:(slots type)XstatXnumXetc,charm:truthyXeval,consumable:statXnumXetc,item:nothing,consumable:eval,material:amountXtypeX(affinityXlevel)
slots=['weapon','top','bottom']
slotc=['top','bottom']
affinity=['aff','afft','affr','afflvl','affxp']
person=['pid','psn','ptrt','race','pfav','lvl','age','pxp']
material=['mat','mata','matt','matf','matc','matr']