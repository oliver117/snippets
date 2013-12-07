var Tabs = new Class({
    initialize: function(container){
        this._titles = container.getFirst('.tabs-title').getChildren();
        this._tabs = container.getChildren('.tabs-panel');

        this._tabs.each(function(item){
            item.setStyle('display', 'none');
        });

        this.setActive(0);

        var _this = this;

        this._titles.each(function(item, index){
            item.addEvent('mouseover', function(){
                _this.setActive(index);
            }.bind(this));
        });
    },

    setActive: function(which){
        this._unmarkAll();
        this._hideAll();
        this._titles[which].addClass('active');
        this._tabs[which].setStyle('display', 'block');
    },

    _unmarkAll: function(){
        this._titles.each(function(item){
            item.removeClass('active');
        });
    },

    _hideAll: function(){
        this._tabs.each(function(item){
            item.setStyle('display', 'none');
        });
    }
});
