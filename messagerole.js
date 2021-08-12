module.exports = {
	name: 'mesajrol',
	description: 'Emojiye göre rol verme',
	async execute(message, args, Discord, client, reaction){
		const ayar = require('../ayar.json');


	//	let ozelrolmesaj = await malikane.channels.cache.get(ayar.ozelrolkanali).send("**Rengarenk rolünü almak için aşağıdaki emojiye tıklayınız. **");
	//	ozelrolmesaj.react(ayar.rolrengarenk[1]);

//		let partnerrolmesaj = await malikane.channels.cache.get(ayar.partnerrolkanali).send('**Partnerlerimizi görmek için ":eye:" emojisine basınız. (Çok bildirim gelebilir.)**');
//		partnerrolmesaj.react(ayar.rolpartnergor[1]);

		let messageEmbed = await message.channel.send("**İsim renginizi buradan seçebilirsiniz.**");
		messageEmbed.react(ayar.rolkirmizi[1]);
		messageEmbed.react(ayar.rolbordo[1]);
		messageEmbed.react(ayar.rolkahverengi[1]);
		messageEmbed.react(ayar.rolturuncu[1]);
		messageEmbed.react(ayar.rolsari[1]);
		messageEmbed.react(ayar.rolayesil[1]);
		messageEmbed.react(ayar.rolyesil[1]);
		messageEmbed.react(ayar.rolcyan[1]);
		messageEmbed.react(ayar.rolmavi[1]);
		messageEmbed.react(ayar.rollacivert[1]);
		messageEmbed.react(ayar.rolmor[1]);
		messageEmbed.react(ayar.rolpembe[1]);
		messageEmbed.react(ayar.rolbeyaz[1]);
		messageEmbed.react(ayar.rolgri[1]);
		messageEmbed.react(ayar.rolsiyah[1]);

		
		
		let mesajrolcinsiyet = await message.channel.send("**Cinsiyetinizi buradan seçebilirsiniz.**");
		mesajrolcinsiyet.react(ayar.rolerkek[1]);
		mesajrolcinsiyet.react(ayar.rolkiz[1]);
		mesajrolcinsiyet.react(ayar.rolbelirtmek[1]);


		let mesajilgi = await message.channel.send("**İlgi alanlarınızı buradan seçebilirsiniz.**");
		mesajilgi.react(ayar.rolbilim[1]);
		mesajilgi.react(ayar.roledebiyat[1]);
		mesajilgi.react(ayar.rolfelsefe[1]);
		mesajilgi.react(ayar.rolmuzik[1]);
		mesajilgi.react(ayar.rolresim[1]);
		mesajilgi.react(ayar.rolspor[1]);
		mesajilgi.react(ayar.roloyunlar[1]);
	}
}
