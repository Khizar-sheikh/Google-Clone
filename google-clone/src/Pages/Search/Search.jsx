import "./Search.css";
import { Link } from "react-router-dom"
import { useStateValue } from './../../Components/Provider/StateProvider';
import useGoogleSearch from './../../Components/useGoogleSearch';
import SearchInput from './../../Components/SearchInput/SearchInput';
import { Description, Image, LocalOffer, MoreVertOutlined, RoomOutlined, SearchOutlined } from "@mui/icons-material";

function SearchPage() {

    // eslint-disable-next-line no-unused-vars
    const [{ term }, dispatch] = useStateValue();

    const data = useGoogleSearch(term);
    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img
                        className="searchPage_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                        alt="" />
                </Link>
                <div className="searchPage_headerBody">
                    <SearchInput hiddenButton />
                    <div className="searchPage_options">

                        {/*--------searchPage_optionsLeft--------------*/}
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchOutlined />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <Description />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <Image />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOffer />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomOutlined />
                                <Link to="/maps">Maps</Link>
                            </div>
                        </div>

                        {/*--------searchPage_optionsRight--------------*/}
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results
                        ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage_result" key={item.link}>
                            <div className="searchPage_resultItem">
                                {/* Image, display name, and link */}
                                <div className="searchPage_resultHeader">
                                    {item.pagemap?.cse_image?.length > 0 && (
                                        <img
                                            className="searchPage_resultImage"
                                            src={item.pagemap?.cse_image[0]?.src}
                                            alt=''
                                        />
                                    )}
                                    <div className="searchPage_resultLinks">
                                        <div className="links-result">
                                            <a href={item.link} className="searchPage_resultTitle" target="_blank" rel="noreferrer">
                                                <p>{new URL(item.link).hostname.replace(/^www\./, '')}</p>
                                            </a>
                                            <a href={item.link} className="searchPage_resultLink" target="_blank" rel="noreferrer">
                                                {item.displayLink}
                                            </a>
                                        </div>
                                        {/* More vertical icon */}
                                        <div className="searchPage_moreIcon">
                                            <MoreVertOutlined />
                                        </div>
                                    </div>
                                </div>
                                {/* Title and Description */}
                                <a
                                    style={{ textDecoration: "none" }}
                                    className="searchPage_resultDetails" href={item.link}>
                                    <h2>{item.title}</h2>
                                    <p className="searchPage_resultSnippet">
                                        {item.snippet}
                                    </p>
                                </a>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchPage;