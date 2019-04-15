import React, { Component } from 'react';
import Background from "./img/black-hole.jpg";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

class Postsrender extends Component {
  render() {
    return (
    	<div>
	    	<Header title="First ever black hole image released" subtitle="Astronomers have taken the first ever image of a black hole, which is located in a distant galaxy." background={Background} />
	    	<article>
			    <div className="container">
			      <div className="row">
			        <div className="col-lg-8 col-md-10 mx-auto">
			          <b><p>Astronomers have taken the first ever image of a black hole, which is located in a distant galaxy.</p></b>

			          <p>It measures 40 billion km across - three million times the size of the Earth - and has been described by scientists as "a monster".</p>

			          <p>The black hole is 500 million trillion km away and was photographed by a network of eight telescopes across the world.</p>

			          <p>Details have been published today in Astrophysical Journal Letters.</p>

								<p>It was captured by the Event Horizon Telescope (EHT), a network of eight linked telescopes.</p>
								
								<p>Prof Heino Falcke, of Radboud University in the Netherlands, who proposed the experiment, told BBC News that the black hole was found in a galaxy called M87.</p>
								
								<p>"What we see is larger than the size of our entire Solar System," he said.</p>
								
								<blockquote className="blockquote">"It has a mass 6.5 billion times that of the Sun. And it is one of the heaviest black holes that we think exists. It is an absolute monster, the heavyweight champion of black holes in the Universe."</blockquote>
   							
   							<p>The image shows an intensely bright "ring of fire", as Prof Falcke describes it, surrounding a perfectly circular dark hole. The bright halo is caused by superheated gas falling into the hole. The light is brighter than all the billions of other stars in the galaxy combined - which is why it can be seen at such distance from Earth.</p>
   							
   							<p>The edge of the dark circle at the centre is the point at which the gas enters the black hole, which is an object that has such a large gravitational pull, not even light can escape.</p>
			          
			          <p>Placeholder text by <a href="http://BBC.com/">BBC</a>.</p>
			        </div>
			      </div>
			    </div>
			  </article>
			  <Footer/>
			</div>
    );
  }
}
export default Postsrender;