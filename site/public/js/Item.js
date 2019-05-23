class Item extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	itemId:"",
            details: {
            	itemName:"",
                img: null,
                file: null,
                cate: "",
                owner: "",
                exchangingItem: "",
                location: "",
                description: "",
            }
        };
    }
}