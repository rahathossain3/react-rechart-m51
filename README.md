# Getting Started with Create React App

### web link Rechart site

    (https://recharts.org/en-US/)

## installs recharts code:

        npm install recharts

## code rules: 

     line hor which property are show
     property er nam ke string hisabe set kora lage 

## code example

            {/* line hor which property are show */}
             <Line dataKey={'price'}></Line>

             {/* line horizontal value  */}
                <XAxis dataKey={"name"}></XAxis>

            {/* line vertical value */}
                <YAxis></YAxis>





## Video 8
###     51-8 Axios, data extraction and data processing bar chart

### site Name 
    Axios Js        the  another way fetch

## axirs instal:

        npm install axios


### code use system:

        useEffect(() => {

                axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
                    .then(data => {
                        const loadedData = data.data.data;
                        const phoneData = loadedData.map(phone => {
                            const parts = phone.slug.split('-');
                            const ph = {
                                name: parts[0],
                                value: parseInt(parts[1])
                            };
                            return ph
                        });
                        setPhones(phoneData);
                        console.log(phoneData)
                    })
            }, [])
        
