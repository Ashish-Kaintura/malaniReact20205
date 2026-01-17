import { useParams, Link, Navigate } from "react-router-dom";
import TilesData from "../data/titelscollection.json"; // Kept your specific filename
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

export default function TileProductDetail() {
    const { categorySlug, productSlug } = useParams();
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    // 1. Scroll to top when switching between related tiles
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productSlug]);

    const category = TilesData.find(
        (c) => c.slug === categorySlug
    );

    const product = category?.products.find(
        (p) => p.slug === productSlug
    );

    // 2. Logic for "More from this collection"
    const relatedProducts = category?.products
        .filter((p) => p.slug !== productSlug)
        .slice(0, 4);

    if (!category || !product) {
        return <Navigate to="/" replace />;
    }
    // --- Description Logic ---
    const description = product.description || "";
    const DESCRIPTION_CHAR_LIMIT = 150;
    const isLongDescription = description.length > DESCRIPTION_CHAR_LIMIT;

    // Determine what text to display based on state
    const displayDescription = isDescriptionExpanded
        ? description
        : description.slice(0, DESCRIPTION_CHAR_LIMIT) + (isLongDescription ? "..." : "");

    return (
        <section className="min-h-screen bg-white font-sans text-slate-800">
            <Helmet>
                <title>{product.name} - Premium Tiles | {category.name}</title>
                <meta
                    name="description"
                    content={product.description || `Shop ${product.name} tiles from our ${category.name} collection.`}
                />
            </Helmet>

            {/* Category Banner */}
            {category.banner && (
                <img src={category.banner} className="w-full object-cover " alt={category.name} />
            )}
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* --- BREADCRUMB NAVIGATION --- */}
                <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
                    <Link to="/" className="hover:text-black transition">Home</Link>
                    <span>/</span>
                    <Link to={`/tiles-collections/${category.slug}`} className="hover:text-black transition">
                        {category.name}
                    </Link>
                    <span>/</span>
                    <span className="text-black font-medium">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
                    {/* Left Column: Image Gallery */}
                    <div className="w-full">
                        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                            <Zoom>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                                />
                            </Zoom>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 text-center">Click image to zoom</p>
                    </div>

                    {/* Right Column: Details & Specs */}
                    <div className="flex flex-col h-full">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                                {category.name} Series
                            </span>
                            {/* Visual Color Indicator if you have hex codes, otherwise text */}
                            {product.color && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className={`w-4 h-4 rounded-full border border-gray-300 bg-gray-200`} />
                                    {/* Note: In a real app, you might map color names to hex codes */}
                                    {product.color}
                                </div>
                            )}
                        </div>

                        {/* --- Description with Read More Toggle --- */}
                        {description ? (
                            <div className="mb-8">
                                <p className="text-gray-600 leading-relaxed text-lg transition-all duration-300">
                                    {displayDescription}
                                </p>

                                {isLongDescription && (
                                    <button
                                        onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                                        className="mt-2 text-sm font-bold text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors"
                                    >
                                        {isDescriptionExpanded ? "Read Less" : "Read More"}
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="mb-8">
                                <p className="text-gray-400 italic">No description available</p>
                            </div>
                        )}

                        {/* Specifications Grid */}
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Specifications</h3>
                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <div>
                                    <span className="block text-gray-500">Primary Color</span>
                                    <span className="font-medium">{product.color || "N/A"}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">Material Type</span>
                                    <span className="font-medium">Marble</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">Finish</span>
                                    <span className="font-medium">{product.finish || "Polished / Honed"}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">Application</span>
                                    <span className="font-medium">Flooring, Countertops</span>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="mt-auto flex gap-4 flex-col sm:flex-row">
                            <Link to="/contact" ><button className="flex-1 bg-black text-white py-4 px-8 rounded-lg font-medium hover:bg-gray-800 transition shadow-lg">
                                Get a Quote
                            </button> </Link>
                            <button className="flex-1 border border-black text-black py-4 px-8 rounded-lg font-medium hover:bg-gray-50 transition">
                                Request Sample
                            </button>
                        </div>
                    </div>
                </div>
                {/* --- RELATED TILES SECTION --- */}
                {relatedProducts && relatedProducts.length > 0 && (
                    <div className="mt-24 pt-10 border-t border-gray-200">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900">
                                    More from {category.name}
                                </h2>
                                <p className="text-gray-500 mt-1">Explore other styles in this collection.</p>
                            </div>
                            <Link
                                to={`/tiles-collections/${category.slug}`}
                                className="hidden md:inline-block text-black font-medium border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition"
                            >
                                View All
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedProducts.map((relProduct) => (
                                <Link
                                    key={relProduct.slug}
                                    to={`/tiles-collections/${category.slug}/${relProduct.slug}`}
                                    className="group block"
                                >
                                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                                        <img
                                            src={relProduct.img}
                                            alt={relProduct.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            Quick View
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 group-hover:text-gray-600 transition">
                                        {relProduct.name}
                                    </h3>
                                    {relProduct.color && (
                                        <p className="text-sm text-gray-500 capitalize">{relProduct.color}</p>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}