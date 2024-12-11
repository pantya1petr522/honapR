export const Honapkkartya = () => {
 
    const honapok = [
        {
            name: "szeptember",
            evszak: "osz",
            photoUrl: "./img/szeptember.jpg",
            leiras: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "oktĂłber",
            evszak: "osz",
            photoUrl: "./img/oktober.jpg",
            leiras: "In sodales lobortis venenatis."
        },
        {
            name: "november",
            evszak: "osz",
            photoUrl: "./img/november.jpg",
            leiras: "Fusce sodales diam volutpat nulla finibus vulputate."
        },
        {
            name: "december",
            evszak: "tel",
            photoUrl: "./img/december.jpg",
            leiras: "Fusce dui enim, consequat ac auctor sit amet, mattis eget odio."
        },
        {
            name: "januĂĄr",
            evszak: "tel",
            photoUrl: "./img/januar.jpg",
            leiras: "Morbi venenatis hendrerit diam, sit amet feugiat nisi convallis eu."
        },
        {
            name: "februĂĄr",
            evszak: "tel",
            photoUrl: "./img/februar.jpg",
            leiras: "Nunc auctor augue nec accumsan lacinia."
        },
        {
            name: "mĂĄrcius",
            evszak: "tavasz",
            photoUrl: "./img/marcius.jpg",
            leiras: "Pellentesque aliquam luctus eros a tincidunt."
        },
        {
            name: "ĂĄprilis",
            evszak: "tavasz",
            photoUrl: "./img/aprilis.jpg",
            leiras: "Vivamus dolor turpis, lobortis eu sagittis sit amet, posuere nec justo."
        },
        {
            name: "mĂĄjus",
            evszak: "tavasz",
            photoUrl: "./img/majus.jpg",
            leiras: "Sed volutpat tortor sed nunc blandit, vel rutrum erat rhoncus."
        },
        {
            name: "jĂşnius",
            evszak: "nyar",
            photoUrl: "./img/junius.jpg",
            leiras: "Nulla erat enim, lobortis et metus vitae, porttitor pharetra arcu."
        },
        {
            name: "jĂşlius",
            evszak: "nyar",
            photoUrl: "./img/julius.jpg",
            leiras: "Duis in lacus in erat imperdiet euismod vitae et massa."
        },
        {
            name: "augusztus",
            evszak: "nyar",
            photoUrl: "./img/augusztus.jpg",
            leiras: "Maecenas quis placerat risus, eu blandit nunc."
        },
    ]




    return (
        <div id="kartyak">
            {honapok.map((honap) => (
                <div className="kartya" id="osz">
                    <img src={honap.photoUrl} alt={honap.name + "i kép"}/>
                    <h2>{honap.name}</h2>
                    <p>{honap.leiras}</p>
                    <a href="">Bővebben</a>
                </div>

            ))}
        </div>
    )
}
