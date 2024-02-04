(function () {
    affinity=[['light','air','water'],['shade','poison','fire'],['electric','growth','cold'],['metal','space','blood'],['psy','evil','moon']]
    //good chaos corruption life neutral death
    //life(light)good life(growth)chaos life(blood)corrupt life(water)neutral life(fire)death
    //good(air)chaos good(moon)corrupt good(cold)neutral good(metal)death
    //chaos(electric)corrupt chaos(psy)neutral chaos(shade)death
    //corrupt(void)neutral corrupt(poison)death
    //neutral(evil)death
    bodies=[['lolint','gaisar','liwwer'],['dasho','corson','ferot'],['elazic','profuth','icol'],['mardle','emacey','balrd'],['siole','degosl','sykon']]
    //PHYSICAL Human:good Abyss:chaos Demon:corrupt Fairy:life Golem:neutral Zombie:death SOUL Prayer:good Elemental:chaos Curse:corruption Ghost:life Spirit:neutral Haunt:death
    persona=[]
    traits=[]
    itypes=['equip','charm','consumable','item']
    //equip=fixed stat increase/decrease (stat,slot)?possible xp in future (reversable on unequip) | charm=sacrafic/grow item (permanent?)(sac stat,grow stat,true condition) | item=nothing | consumable with 1x effect command.
    sloti=['weapon','charm']
    slotc=['top','bottom']
    //GOOD[5] light(lolint) growth(profuth) water(liwwer) EVIL[1] shade(dasho) poison(corson) fire(ferot) CHAOS[2] electric(elazic) air(gaisar) cold(icol) NEUTRAL[3] metal(mardle) space(emacey) blood(balrd) SOUL[4] psy(siole) evil(degosl) moon(sykon)
    // light(color) air(shape) water(color) shade(color) poison(shape) fire(aura) electric(shape) growth(part) cold(shape) metal(color) space(aura) blood(part) psy(aura) evil(part) moon(aura)
    end() //skincolor(Black:shade Red:fire Blue:water) aura(Body:space Head:moon Limb:poison) shape(Eye:cold Line:light Mouth:psy) tail(Fuzzy:electric Slim:evil Tentacle:growth) head(Ear:air Horn:metal Teeth:blood)
//GOOD[5] none light growth water
//EVIL[1] none shade poison fire
//CHAOS[2] none electric air cold
//NEUTRAL[3] none metal space blood
//SOUL[4] none psy evil moon
})()