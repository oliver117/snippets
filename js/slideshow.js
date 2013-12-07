var Slideshow = new Class({
    initialize: function(container){
        this.images = container.getElements('img');

        // hide all images
        this.images.each(function(item, index){
            item.setStyle('opacity', 0);
        });

        this.currentImage = Number.random(0, this.images.length - 1);

        var fx = new Fx.Tween(this.curImage(),
                {'duration': 'long',
                 'transition': 'quad:in:out',
                 'property': 'opacity'});

        fx.start(0, 1);
    },

    curImage: function(){
        return this.images[this.currentImage];
    },

    nextImage: function(){
        var fx = new Fx.Tween(this.curImage(), {
            'duration': 'long',
            'transition': 'quad:in:out',
            'property': 'opacity'
        });

        this.currentImage++;
        if (this.currentImage >= this.images.length) {
            this.currentImage = 0;
        }

        fx.start(1, 0);

        var new_fx = new Fx.Tween(this.curImage(), {
            'duration': 'long',
            'transition': 'quad:in:out',
            'property': 'opacity'
        });
        new_fx.start(0, 1);
    },

    prevImage: function(){
        var fx = new Fx.Tween(this.curImage(), {
            'duration': 'long',
            'transition': 'quad:in:out',
            'property': 'opacity'
        });

        this.currentImage--;
        if (this.currentImage < 0) {
            this.currentImage = (this.images.length-1);
        }

        fx.start(1, 0);

        var new_fx = new Fx.Tween(this.curImage(), {
            'duration': 'long',
            'transition': 'quad:in:out',
            'property': 'opacity'
        });
        new_fx.start(0, 1);
    },

    randomImage: function(){
        var fx = new Fx.Tween(this.curImage(), {
            'duration': 'long',
            'transition': 'quad:in:out',
            'property': 'opacity'
        });
        fx.start(1, 0);

        var old = this.currentImage;
        while (this.currentImage == old) {
            this.currentImage = Number.random(0, this.images.length - 1);
        }

        var new_fx = new Fx.Tween(this.curImage(), {
            'duration': 'long',
            'transition': 'quad:in:out',
            'property': 'opacity'
        });
        new_fx.start(0, 1);
    },

    startAuto: function(delay_ms) {
        this.auto_delay = delay_ms;
        this.nextImage.periodical(this.auto_delay, this);
    },

    startRandom: function(delay_ms) {
        this.auto_delay = delay_ms;
        this.randomImage.periodical(this.auto_delay, this);
    }
});
