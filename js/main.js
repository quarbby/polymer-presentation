
			Mousetrap.bind('e g g', function() { 
				console.log('minion'); 
				var curSlide = Reveal.getCurrentSlide();
				var img = document.createElement("img");
				img.setAttribute('class', 'minion');
				img.src = "./img/minion.png";
				curSlide.appendChild(img);
				
			});
			
			Mousetrap.bind('g r r', function() {
				console.log('grrrr');
				var img = document.createElement("img");
				img.setAttribute('id', 'minion');
				img.src = "./img/minion.png";
				Reveal.getCurrentSlide().appendChild(img);

				 $( "#minion" ).toggle( "shake" );

			});
			
			Mousetrap.bind('< 3', function() {
			   console.log("<3"); 
			   alert("Lynnette loves Adrian!");
			});
			
			//Konami Code
			Mousetrap.bind('q q q', function() {
				console.log("song");
			    var curSlide = Reveal.getCurrentSlide();
			    var header = $("h2", curSlide);
				var minionFrame = $('<iframe />', 
					{ src: 'https://www.youtube.com/embed/Cxmu1mxK5so?autoplay=1',
					  width: '560px',
					  height: '315px'
					});
			    header.html(minionFrame);
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