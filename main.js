client.on('messageReactionAdd', async(reaction, user) => {
    if(await db.fetch(`rolsistemi_${reaction.message.guild.id}`) == "0") return false;
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    const rolkanali = await db.fetch(`rolkanali_${reaction.message.guild.id}`); 
    if(reaction.message.channel.id != rolkanali) return false;


                if(reaction.emoji.name === ayar.rolkirmizi[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolkirmizi[0])
                    );
                }else if(reaction.emoji.name === ayar.rolbordo[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbordo[0])
                    );
                }else if(reaction.emoji.name === ayar.rolkahverengi[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolkahverengi[0])
                    );
                }else if(reaction.emoji.name === ayar.rolturuncu[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolturuncu[0])
                    );
                }else if(reaction.emoji.name === ayar.rolsari[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolsari[0])
                    );
                }else if(reaction.emoji.name === ayar.rolayesil[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolayesil[0])
                    );
                }else if(reaction.emoji.name === ayar.rolyesil[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolyesil[0])
                    );
                }else if(reaction.emoji.name === ayar.rolcyan[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolcyan[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmavi[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmavi[0])
                    );
                }else if(reaction.emoji.name === ayar.rollacivert[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rollacivert[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmor[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmor[0])
                    );
                }else if(reaction.emoji.name === ayar.rolpembe[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolpembe[0])
                    );
                }else if(reaction.emoji.name === ayar.rolbeyaz[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbeyaz[0])
                    );
                }else if(reaction.emoji.name === ayar.rolgri[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolgri[0])
                    );
                }else if(reaction.emoji.name === ayar.rolsiyah[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolsiyah[0])
                    );
                }else{return;}




                if(reaction.emoji.name === ayar.rolerkek[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolerkek[0])
                    );
                }else if(reaction.emoji.name === ayar.rolkiz[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolkiz[0])
                    );
                }else if(reaction.emoji.name === ayar.rolbelirtmek[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbelirtmek[0])
                    );
                }else{return;}



            

                if(reaction.emoji.name === ayar.rologlak[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rologlak[0])
                        );
                }else if(reaction.emoji.name === ayar.rolkova[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolkova[0])
                        );
                }else if(reaction.emoji.name === ayar.rolbalik[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbalik[0])
                        );
                }else if(reaction.emoji.name === ayar.rolkoc[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolkoc[0])
                        );
                }else if(reaction.emoji.name === ayar.rolboga[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolboga[0])
                        );
                }else if(reaction.emoji.name === ayar.rolikizler[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolikizler[0])
                        );
                }else if(reaction.emoji.name === ayar.rolyengec[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolyengec[0])
                        );
                }else if(reaction.emoji.name === ayar.rolaslan[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolaslan[0])
                        );
                }else if(reaction.emoji.name === ayar.rolbasak[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbasak[0])
                        );
                }else if(reaction.emoji.name === ayar.rolterazi[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolterazi[0])
                        );
                }else if(reaction.emoji.name === ayar.rolakrep[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolakrep[0])
                        );
                }else if(reaction.emoji.name === ayar.rolyay[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolyay[0])
                        );
                }else{return;}


            

                if(reaction.emoji.name === ayar.rolortaokul[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolortaokul[0])
                    );
                }else if(reaction.emoji.name === ayar.rollise[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rollise[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmezunlise[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmezunlise[0])
                    );
                }else if(reaction.emoji.name === ayar.roluniversite[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.roluniversite[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmezununiversite[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmezununiversite[0])
                    );
                }else{return;}




                if(reaction.emoji.name === ayar.rolsayisal[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolsayisal[0])
                    );
                }else if(reaction.emoji.name === ayar.rolesit[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolesit[0])
                    );
                }else if(reaction.emoji.name === ayar.rolsozel[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolsozel[0])
                    );
                }else if(reaction.emoji.name === ayar.roldil[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.roldil[0])
                    );
                }else{return;}



                if(reaction.emoji.name === ayar.rolbilim[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbilim[0])
                    );
                }else if(reaction.emoji.name === ayar.roledebiyat[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.roledebiyat[0])
                    );
                }else if(reaction.emoji.name === ayar.rolfelsefe[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolfelsefe[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmuzik[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmuzik[0])
                    );
                }else if(reaction.emoji.name === ayar.rolresim[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolresim[0])
                    );
                }else if(reaction.emoji.name === ayar.rolspor[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolspor[0])
                    );
                }else if(reaction.emoji.name === ayar.roloyunlar[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.roloyunlar[0])
                    );
                }else{return;}

                



                if(reaction.emoji.name === ayar.rolmini[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmini[0])
                    );
                }else if(reaction.emoji.name === ayar.rolcs[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolcs[0])
                    );
                }else if(reaction.emoji.name === ayar.rolval[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolval[0])
                    );
                }else if(reaction.emoji.name === ayar.rolpubg[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolpubg[0])
                    );
                }else if(reaction.emoji.name === ayar.rolfort[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolfort[0])
                    );
                }else if(reaction.emoji.name === ayar.rollol[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rollol[0])
                    );
                }else if(reaction.emoji.name === ayar.rolgta[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolgta[0])
                    );
                }else if(reaction.emoji.name === ayar.rolamong[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolamong[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmc[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmc[0])
                    );
                }else if(reaction.emoji.name === ayar.rolapex[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolapex[0])
                    );
                }else if(reaction.emoji.name === ayar.rolrocket[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolrocket[0])
                    );
                }else{return;}

        });




//EMOJILER KALDIRILIRSA
client.on('messageReactionRemove', async(reaction, user) => {
    if(await db.fetch(`rolsistemi_${reaction.message.guild.id}`) == "0") return false;
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    const rolkanali = await db.fetch(`rolkanali_${reaction.message.guild.id}`); 
    if(reaction.message.channel.id != rolkanali) return false;



                if(reaction.emoji.name === ayar.rolkirmizi[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolkirmizi[0])
                    );
                }else if(reaction.emoji.name === ayar.rolbordo[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbordo[0])
                    );
                }else if(reaction.emoji.name === ayar.rolkahverengi[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolkahverengi[0])
                    );
                }else if(reaction.emoji.name === ayar.rolturuncu[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolturuncu[0])
                    );
                }else if(reaction.emoji.name === ayar.rolsari[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolsari[0])
                    );
                }else if(reaction.emoji.name === ayar.rolyesil[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolyesil[0])
                    );
                }else if(reaction.emoji.name === ayar.rolayesil[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolayesil[0])
                    );
                }else if(reaction.emoji.name === ayar.rolcyan[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolcyan[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmavi[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmavi[0])
                    );
                }else if(reaction.emoji.name === ayar.rollacivert[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rollacivert[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmor[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmor[0])
                    );
                }else if(reaction.emoji.name === ayar.rolpembe[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolpembe[0])
                    );
                }else if(reaction.emoji.name === ayar.rolbeyaz[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbeyaz[0])
                    );
                }else if(reaction.emoji.name === ayar.rolgri[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolgri[0])
                    );
                }else if(reaction.emoji.name === ayar.rolsiyah[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolsiyah[0])
                    );
                }else{return;}




                if(reaction.emoji.name === ayar.rolerkek[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolerkek[0])
                    );
                }else if(reaction.emoji.name === ayar.rolkiz[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolkiz[0])
                    );
                }else if(reaction.emoji.name === ayar.rolbelirtmek[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbelirtmek[0])
                    );
                }else{return;}


                if(reaction.emoji.name === ayar.rologlak[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rologlak[0])
                        );
                }else if(reaction.emoji.name === ayar.rolkova[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolkova[0])
                        );
                }else if(reaction.emoji.name === ayar.rolbalik[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbalik[0])
                        );
                }else if(reaction.emoji.name === ayar.rolkoc[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolkoc[0])
                        );
                }else if(reaction.emoji.name === ayar.rolboga[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolboga[0])
                        );
                }else if(reaction.emoji.name === ayar.rolikizler[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolikizler[0])
                        );
                }else if(reaction.emoji.name === ayar.rolyengec[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolyengec[0])
                        );
                }else if(reaction.emoji.name === ayar.rolaslan[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolaslan[0])
                        );
                }else if(reaction.emoji.name === ayar.rolbasak[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbasak[0])
                        );
                }else if(reaction.emoji.name === ayar.rolterazi[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolterazi[0])
                        );
                }else if(reaction.emoji.name === ayar.rolakrep[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolakrep[0])
                        );
                }else if(reaction.emoji.name === ayar.rolyay[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolyay[0])
                        );
                }else{return;}




                if(reaction.emoji.name === ayar.rolortaokul[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolortaokul[0])
                    );
                }else if(reaction.emoji.name === ayar.rollise[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rollise[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmezunlise[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmezunlise[0])
                    );
                }else if(reaction.emoji.name === ayar.roluniversite[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.roluniversite[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmezununiversite[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmezununiversite[0])
                    );
                }else{return;}




                if(reaction.emoji.name === ayar.rolsayisal[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolsayisal[0])
                    );
                }else if(reaction.emoji.name === ayar.rolesit[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolesit[0])
                    );
                }else if(reaction.emoji.name === ayar.rolsozel[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolsozel[0])
                    );
                }else if(reaction.emoji.name === ayar.roldil[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.roldil[0])
                    );
                }else{return;}



                if(reaction.emoji.name === ayar.rolbilim[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolbilim[0])
                    );
                }else if(reaction.emoji.name === ayar.roledebiyat[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.roledebiyat[0])
                    );
                }else if(reaction.emoji.name === ayar.rolfelsefe[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolfelsefe[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmuzik[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmuzik[0])
                    );
                }else if(reaction.emoji.name === ayar.rolresim[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolresim[0])
                    );
                }else if(reaction.emoji.name === ayar.rolspor[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolspor[0])
                    );
                }else if(reaction.emoji.name === ayar.roloyunlar[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.roloyunlar[0])
                    );
                }else{return;}



                if(reaction.emoji.name === ayar.rolmini[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmini[0])
                    );
                }else if(reaction.emoji.name === ayar.rolcs[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolcs[0])
                    );
                }else if(reaction.emoji.name === ayar.rolval[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolval[0])
                    );
                }else if(reaction.emoji.name === ayar.rolpubg[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolpubg[0])
                    );
                }else if(reaction.emoji.name === ayar.rolfort[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolfort[0])
                    );
                }else if(reaction.emoji.name === ayar.rollol[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rollol[0])
                    );
                }else if(reaction.emoji.name === ayar.rolgta[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolgta[0])
                    );
                }else if(reaction.emoji.name === ayar.rolamong[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolamong[0])
                    );
                }else if(reaction.emoji.name === ayar.rolmc[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolmc[0])
                    );
                }else if(reaction.emoji.name === ayar.rolapex[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolapex[0])
                    );
                }else if(reaction.emoji.name === ayar.rolrocket[1]){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(
                        reaction.message.guild.roles.cache.find(role => role.name === ayar.rolrocket[0])
                    );
                }else{return;}
            

});



