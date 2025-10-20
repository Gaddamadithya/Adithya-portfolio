
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'spin-reverse': {
					from: { transform: 'rotate(360deg)' },
					to: { transform: 'rotate(0deg)' }
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'pink-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
					},
					'50%': {
						boxShadow: '0 0 30px rgba(236, 72, 153, 0.8), 0 0 60px rgba(236, 72, 153, 0.5)',
					}
				},
				'pink-pulse': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.05)'
					}
				},
				'float-3d': {
					'0%, 100%': {
						transform: 'translateY(0) rotateX(0deg) rotateY(0deg)',
					},
					'33%': {
						transform: 'translateY(-20px) rotateX(5deg) rotateY(5deg)',
					},
					'66%': {
						transform: 'translateY(-10px) rotateX(-5deg) rotateY(-5deg)',
					}
				},
				'rotate-3d': {
					'0%': {
						transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
					},
					'33%': {
						transform: 'rotateX(360deg) rotateY(0deg) rotateZ(0deg)',
					},
					'66%': {
						transform: 'rotateX(360deg) rotateY(360deg) rotateZ(0deg)',
					},
					'100%': {
						transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
					}
				},
				'color-shift': {
					'0%, 100%': {
						filter: 'hue-rotate(0deg) brightness(1)',
					},
					'25%': {
						filter: 'hue-rotate(90deg) brightness(1.2)',
					},
					'50%': {
						filter: 'hue-rotate(180deg) brightness(1.1)',
					},
					'75%': {
						filter: 'hue-rotate(270deg) brightness(1.2)',
					}
				},
				'perspective-spin': {
					'0%': {
						transform: 'perspective(1000px) rotateY(0deg)',
					},
					'100%': {
						transform: 'perspective(1000px) rotateY(360deg)',
					}
				},
				'multi-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(236, 72, 153, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)',
					},
					'33%': {
						boxShadow: '0 0 30px rgba(236, 72, 153, 0.6), 0 0 50px rgba(168, 85, 247, 0.4), 0 0 70px rgba(59, 130, 246, 0.3)',
					},
					'66%': {
						boxShadow: '0 0 25px rgba(168, 85, 247, 0.6), 0 0 45px rgba(59, 130, 246, 0.4), 0 0 65px rgba(236, 72, 153, 0.3)',
					}
				},
				'tilt-3d': {
					'0%, 100%': {
						transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
					},
					'50%': {
						transform: 'perspective(800px) rotateX(10deg) rotateY(10deg) scale(1.05)',
					}
				},
				'bounce-3d': {
					'0%, 100%': {
						transform: 'translateY(0) scale(1) rotateX(0deg)',
					},
					'50%': {
						transform: 'translateY(-25px) scale(1.1) rotateX(15deg)',
					}
				},
				'rgb-shift': {
					'0%': {
						textShadow: '2px 2px 0 rgba(255, 0, 0, 0.7), -2px -2px 0 rgba(0, 255, 255, 0.7)',
					},
					'50%': {
						textShadow: '-2px -2px 0 rgba(255, 0, 0, 0.7), 2px 2px 0 rgba(0, 255, 255, 0.7)',
					},
					'100%': {
						textShadow: '2px 2px 0 rgba(255, 0, 0, 0.7), -2px -2px 0 rgba(0, 255, 255, 0.7)',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'spin-slow': 'spin 8s linear infinite',
				'spin-reverse': 'spin-reverse 6s linear infinite',
				'pink-glow': 'pink-glow 2s ease-in-out infinite',
				'pink-pulse': 'pink-pulse 2s ease-in-out infinite',
				'float-3d': 'float-3d 6s ease-in-out infinite',
				'rotate-3d': 'rotate-3d 20s linear infinite',
				'color-shift': 'color-shift 8s ease-in-out infinite',
				'perspective-spin': 'perspective-spin 10s linear infinite',
				'multi-glow': 'multi-glow 4s ease-in-out infinite',
				'tilt-3d': 'tilt-3d 3s ease-in-out infinite',
				'bounce-3d': 'bounce-3d 2s ease-in-out infinite',
				'rgb-shift': 'rgb-shift 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
