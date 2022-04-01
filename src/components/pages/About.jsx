function About() {
    return ( 
        <div className="white about-page">
            
            <h1 className='BebasNeue' style={{fontSize: '7em'}}>the party people app</h1>
            <h3 className='BebasNeue' style={{fontSize: '3em'}}>Where people who party find parties to party at</h3>
            <p style={{fontSize: '2em'}}>Party people is an app designed with the gathering in mind. 
             Want to find out where the latest ragers, raves or lan parties are happening? 
              We got you!  Sign-up and create a free acount to start viewing events.  
              Heck, maybe you even want to throw a party of your own.  The limit is as high as you can get your hands!  Let's Party!
            </p>
           
                <br />
            <h2 className='BebasNeue' style={{fontSize: '3em'}} >Meet The Developers: </h2>
            <br />
            <div className='BebasNeue flex-box' >
                <div>
                    <h3>Triston J. Palacios, The Hype</h3>
                    <img style={{borderRadius:'100%'}} src="images/triston.jpg" width='300px' alt="Grace Sung" />
                    <br />
                    <a style={{fontSize: '30px' }} href="https://www.linkedin.com/in/tristonpalacios/">LinkedIn</a>
                    <br />
                    <a style={{fontSize: '30px' }} href="https://github.com/tristonpalacios">Github</a>
                </div>
                <div>
                    <h3>Bryan Nguyen, The Brain</h3>
                    <img style={{borderRadius:'100%'}} src="images/bryan.jpeg" height='300px' alt="Bryan Nguyen" />
                    <br />
                    <a style={{fontSize: '30px' }} href="https://www.linkedin.com/in/brnguy/">LinkedIn</a>
                    <br />
                    <a style={{fontSize: '30px' }} href="https://github.com/brnguy">Github</a>
                </div>
                <div>
                    <h3>Grace Sung, The Bull</h3>
                    <img style={{borderRadius:'100%'}} src="images/grace.jpg" width='300px' alt="Grace Sung" />
                    <br />
                    <a style={{fontSize: '30px' }} href="https://www.linkedin.com/in/chanhee-grace-sung/">LinkedIn</a>
                    <br />
                    <a style={{fontSize: '30px' }} href="https://github.com/kokopuffz">Github</a>
                </div>
                <div>
                    <h3>Zach Brose, The Brose</h3>
                    <img style={{borderRadius:'100%'}} src="images/zach.jpeg" width='300px' alt="Grace Sung" />
                    <br />
                    <a style={{fontSize: '30px' }} href="https://www.linkedin.com/in/zach-brose-668a9891/">LinkedIn</a>
                    <br />
                    <a style={{fontSize: '30px' }} href="https://github.com/zbrose">Github</a> 
                </div>
            </div>
            <div className="BebasNeue">
                <h1>Patron Saint</h1>
                <h3>Tom Bombadil</h3>
                <img style={{borderRadius:'100%'}} src="images/tom-bombadil.jpeg" width='500px' alt="Tom Bombadil" />
            </div>
            
        </div>
     );
}

export default About;