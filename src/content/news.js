import React from 'react'
import NewsEntry from './news_entry'
import PrevNextButton from './prev_next'

export default class News extends React.Component {
    constructor(props) {
        super();
        this.state = {
            news: [{
                id: 1,
                src: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5eb10238cb95f20007db3cd6%2F0x0.jpg",
                title: "Unmasking The Truth: Insider’s Account Of Sourcing Face Masks From China",
                description: "A gold- rush mentality has clearly taken hold in China.Companies that had previously dealt in stone, lighting fixtures and furniture are now trading in face masks.",
                content: "A worker wearing a protective suit holds face masks to package at Naton Medical Group, a company ...[+] which makes medical equipment in Beijing on April 24, 2020. \r\nWANG ZHAO/ AFP via Getty Images) \r\nAfter weeks of lockdown here in Shanghai, out of the blue, …[+5882 chars]",
                url: "https://www.forbes.com/sites/davidyu/2020/05/06/unmasking-the-truth-insiders-account-of-sourcing-face-masks-from-china/",
                alt: "Picture"
            },
            {
                id: 2,
                src: "https://www.coindesk.com/wp-content/uploads/2020/05/chart-arrows-up-down-1200x628.jpg",
                alt: "Picture",
                title: "Amun Launches Token Tracking the Inverse of Bitcoin’s Price",
                description: "The Swiss ETP provider's new token lets traders make gains whenever bitcoin’s price falls.",
                url: "https://www.coindesk.com/amun-launches-token-tracking-the-inverse-of-bitcoins-price",
                content: "A new token lets traders make gains whenever bitcoins price falls.\r\nSwiss fintech firm Amun launched its BTCSHORT (BTCS) daily inverse token Wednesday, which returns a gain based on bitcoins (BTC) inverse price movements in a given 24-hour period. The product… [+4532 chars]"
            },
            {
                id: 3,
                src: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5eb27ce3ed706b000616ca92%2F0x0.jpg",
                alt: "Picture",
                title: "Bitcoin Halving In 5 Days, U.S. National Debt To Hit $25 Trillion",
                description: "The Federal Reserve has just announced new plans to print $3 trillion to bankroll the economy.With the bitcoin halving event around the corner, will we see astronomical all- time new highs ? ",
                url: "https://www.forbes.com/sites/lukefitzpatrick/2020/05/06/bitcoin-halving-in-5-days-us-national-debt-to-hit-25-trillion/",
                content: "A lady checking latest prices of Bitcoin digital currency outside Bitcoin ATM machine in Rzeszow's ... [+] Millenium Shopping Mall. A week ago, the Bitcoin (BTC) situation was looking not good, with a possibility of a further drop to $6,000 that began to circ… [+5928 chars]"
            },
            {
                id: 4,
                src: "null",
                alt: "",
                title: "Warren Buffett compares the Depression to current day economy - Yahoo Finance",
                description: "Warren Buffett compares the Depression to current day economyYahoo Finance Bill Murray asked Warren Buffett a question, and the billionaire gave a powerful answer on income inequalityYahoo Finance Warren Buffett Expects Market Doom That Can Take Down Bitcoin …",
                url: "https://slashdot.org/firehose.pl?op=view&amp;id=130510362",
                content: "The Fine Print: The following comments are owned by whoever posted them.We are not responsible for them in any way."
            },
            {
                id: 5,
                src: "https://dailyfintech.com/wp-content/uploads/2020/05/christiann-koepke-0jPuWm8_9wY-unsplash-1024x683.jpg",
                alt: "Picture",
                title: "Trading Through Turbulent Times: Opportunities For Payments’ Fintechs & Investors",
                description: "Jessica Ellerm is a thought leader specializing in Small Business and the Gig Economy and is the CEO and Co- Founder of Zuper, a neowealth disruptor in Australia For many fintech companies and new financial technologies(hello Bitcoin), COVID - 19 is proving to …",
                url: "https://dailyfintech.com/2020/05/06/trading-through-turbulent-times-opportunities-for-payments-fintechs-investors/",
                content: "Jessica Ellerm is a thought leader specializing in Small Business and the Gig Economy and is the CEO and Co-Founder of Zuper, a neowealth disruptor in Australia\r\nFor many fintech companies and new financial technologies (hello Bitcoin), COVID-19 is proving to… [+2649 chars]"
            }
            ]
        }
    }

    clicked = (id) => {
        this.props.handleClick(this.state.news[id - 1]);
    }

    render() {
        return (
            <div className={this.props.url === '/' ? 'news_m' : 'news_s'}>
                {this.state.news.map((entry, id) => (
                    <NewsEntry key={id} id={entry.id} src={entry.src} alt={entry.alt} title={entry.title} onClicked={this.clicked} />
                ))}
                <div className="buttons">
                    <PrevNextButton text={"Last"} clicked={this.props.handleLast}/>
                    <PrevNextButton text={"Next"} clicked={this.props.handleNext}/>
                </div>
            </div>
        )
    }
}