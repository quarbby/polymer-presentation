
			Mousetrap.bind('e g g', function() { 
				console.log('minion'); 
				var curSlide = Reveal.getCurrentSlide();
				var img = document.createElement("img");
				img.setAttribute('class', 'minion');
				img.src = "./img/minion.jpg";
				curSlide.appendChild(img);
				
			});
			
			Mousetrap.bind('< 3', function() {
			   console.log("<3"); 
			   alert("Lynnette loves Adrian!");
			});
			
			Mousetrap.bind('r m e', function() {
			    var minions = document.getElementsByClassName('minion');
			    if (minions.length > 0) {
			    	for (var i=0; i<minions.length; i++) {
				    	if(minions[i] && minions[i].parentElement){
							minions[i].parentElement.removeChild(minions[i]);
						}			    		
			    	}
			    }

			});
		
			Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,

				transition: 'slide', // none/fade/slide/convex/concave/zoom

				dependencies: [
					{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
				]
			});