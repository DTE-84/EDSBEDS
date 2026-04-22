import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const location = useLocation();
	const isLanding = location.pathname === "/";

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const categories = [
		{ name: "Mattresses", path: "/mattresses" },
		{ name: "Adjustable Bases", path: "/bases" },
		{ name: "Bedding", path: "/bedding" },
		{ name: "Bed Frames", path: "/frames" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
				isScrolled || !isLanding
					? "bg-white/98 backdrop-blur-xl py-4 shadow-[0_1px_0_rgba(0,0,0,0.05)]"
					: "bg-transparent py-8"
			}`}>
			<div className='container'>
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<Link
						to='/'
						className='group relative z-10'>
						<div className='flex items-baseline gap-0.5'>
							<span
								className={`text-3xl font-black tracking-tighter transition-colors duration-300 ${
									isScrolled || !isLanding
										? "text-[var(--text-main)]"
										: "text-white"
								}`}>
								EDS
							</span>
							<span
								className={`text-3xl font-black tracking-tighter transition-colors duration-300 ${
									isScrolled || !isLanding
										? "text-[var(--accent-blue)]"
										: "text-white/90"
								}`}>
								BEDS
							</span>
						</div>
						<div
							className={`h-0.5 mt-1 transition-all duration-300 ${
								isScrolled || !isLanding
									? "bg-[var(--accent-blue)]"
									: "bg-white"
							} w-0 group-hover:w-full`}
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden lg:flex items-center gap-8'>
						{categories.map((item) => (
							<NavLink
								key={item.path}
								to={item.path}
								className={({ isActive }) => `relative py-2 text-sm font-bold transition-all duration-300 group ${
									isScrolled || !isLanding
										? isActive ? "text-[var(--accent-blue)]" : "text-[var(--text-dim)] hover:text-[var(--text-main)]"
										: isActive ? "text-white" : "text-white/80 hover:text-white"
								}`}>
								{item.name}
								<div
									className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
										location.pathname === item.path
											? isScrolled || !isLanding
												? "bg-[var(--accent-blue)] scale-x-100"
												: "bg-white scale-x-100"
											: "bg-[var(--accent-blue)] scale-x-0 group-hover:scale-x-100"
									}`}
								/>
							</NavLink>
						))}
					</div>

					{/* CTA Section */}
					<div className='hidden lg:flex items-center gap-6'>
						<a
							href='tel:3144528783'
							className={`flex items-center gap-2 text-sm font-bold transition-colors ${
								isScrolled || !isLanding
									? "text-[var(--text-main)] hover:text-[var(--accent-blue)]"
									: "text-white hover:text-white/80"
							}`}>
							<Phone size={16} />
							(314) 452-8783
						</a>
						<Link
							to='/appointment'
							className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
								isScrolled || !isLanding
									? "bg-[var(--accent-blue)] text-white hover:bg-[var(--accent-blue)]/90 shadow-lg shadow-[var(--accent-blue)]/20"
									: "bg-white text-[var(--accent-blue)] hover:bg-white/90 shadow-xl"
							}`}>
							Book Appointment
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setMobileMenuOpen(true)}
						className={`lg:hidden p-2 rounded-lg transition-colors ${
							isScrolled || !isLanding
								? "text-[var(--text-main)] hover:bg-gray-100"
								: "text-white hover:bg-white/10"
						}`}>
						<Menu size={24} />
					</button>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			{mobileMenuOpen && (
				<div className='fixed inset-0 bg-white z-[100] lg:hidden animate-in fade-in slide-in-from-right duration-300'>
					<div className='container flex flex-col h-full pt-8 pb-12'>
						{/* Mobile Header */}
						<div className='flex items-center justify-between mb-12'>
							<div className='flex items-baseline gap-0.5'>
								<span className='text-3xl font-black tracking-tighter text-[var(--text-main)]'>
									EDS
								</span>
								<span className='text-3xl font-black tracking-tighter text-[var(--accent-blue)]'>
									BEDS
								</span>
							</div>
							<button
								onClick={() => setMobileMenuOpen(false)}
								className='p-2 rounded-lg hover:bg-gray-100 transition-colors'>
								<X size={24} />
							</button>
						</div>

						{/* Mobile Navigation Links */}
						<nav className='flex flex-col gap-2 mb-auto'>
							{categories.map((item, i) => (
								<NavLink
									key={item.path}
									to={item.path}
									onClick={() => setMobileMenuOpen(false)}
									className={({ isActive }) => `text-left text-3xl font-bold py-4 transition-colors border-b border-gray-100 last:border-0 ${
                    isActive ? "text-[var(--accent-blue)]" : "text-[var(--text-main)] hover:text-[var(--accent-blue)]"
                  }`}
									style={{ animationDelay: `${i * 50}ms` }}>
									{item.name}
								</NavLink>
							))}
						</nav>

						{/* Mobile Footer */}
						<div className='grid grid-cols-1 gap-4 pt-8 border-t border-gray-100'>
							<a
								href='tel:3144528783'
								className='flex items-center justify-center gap-3 bg-gray-50 py-6 rounded-2xl text-lg font-bold text-[var(--text-main)] hover:bg-gray-100 transition-colors'>
								<Phone size={20} />
								(314) 452-8783
							</a>
							<Link
								to='/appointment'
								onClick={() => setMobileMenuOpen(false)}
								className='bg-[var(--accent-blue)] text-white py-6 rounded-2xl text-lg font-bold hover:bg-[var(--accent-blue)]/90 transition-all shadow-xl shadow-[var(--accent-blue)]/20 text-center'>
								Book Appointment
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navigation;
