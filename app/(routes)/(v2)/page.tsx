import { Lock, Shield, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white py-24">
      {/* Header */}
      {/* <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16"> */}
      {/* Logo */}
      {/* <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SCALAR</span>
              <span className="text-xs text-gray-500 font-medium">
                The Future of Scalable
              </span>
            </div> */}

      {/* Navigation */}
      {/* <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                News
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Community
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Docs V1
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
            </nav> */}
      {/* </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Supercharge{" "}
            ⚡{" "}
            Your Bitcoin
            <br />
            with <span className="text-blue-600">Scalar</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            The first full-stack Bitcoin DeFi suite. Earn yields, unlock
            liquidity, and customize solutions—all secured by native BTC.
          </p>

          {/* Video placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 font-medium">
                  Secured by Multi-Signature Vaults
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi Potential Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Bitcoin&apos;s Unleashed Potential in DeFi 🔥
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Over $11 in BTC sits idle, lacking native yield mechanisms like
            ETH&apos;s staking. Security risks in cross-chain bridging, fragmented
            liquidity across Layer 2s and wrapped tokens, and limited
            integration with DeFi protocols render Bitcoin&apos;s role in lending,
            borrowing, and broader crypto ecosystem growth.
          </p>
        </div>
      </section>

      {/* Scalar Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Scalar: Native{" "}
                <span className="text-blue-600">Bitcoin DeFi</span>
                <br />
                Unleashed
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Scalar unlocks Bitcoin&apos;s DeFi potential with secure,
                non-custodial vaults. Deposit BTC for yield farming, borrowing,
                or trading on Ethereum, Solana, and more. Takes BTC for passive
                income or use your Bitcoin as collateral for business solutions.
                Reclaim BTC anytime with on-chain proofs.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Bitcoin&apos;s liquidity, redefined—secure, flexible, native.
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white py-6 px-6 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Instant Access</div>
                    <div className="text-sm opacity-90">
                      Trade BTC for DeFi yields or trading
                    </div>
                  </div>
                </div>
              </Button>

              <Button
                variant="outlined"
                className="w-full justify-start border-blue-200 hover:bg-blue-50 py-6 px-6 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      Staking Vault
                    </div>
                    <div className="text-sm text-gray-600">
                      Earn rewards on Bitcoin
                    </div>
                  </div>
                </div>
              </Button>

              <Button
                variant="outlined"
                className="w-full justify-start border-blue-200 hover:bg-blue-50 py-6 px-6 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">UPC Vault</div>
                    <div className="text-sm text-gray-600">
                      Use Bitcoin as collateral
                    </div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              From Native Bitcoin to DeFi in{" "}
              <span className="font-semibold text-blue-600">3 Steps</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Deposit BTC
                </h3>
                <p className="text-gray-600">
                  Lock your Bitcoin in a secure multi-sig vault
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Receive wBTC
                </h3>
                <p className="text-gray-600">
                  Get wBTC on Ethereum, Solana, or Base to use in DeFi
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Earn & Redeem
                </h3>
                <p className="text-gray-600">
                  Farm yields, borrow or trade - withdraw your BTC anytime
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Security & Trust
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Your Bitcoin, Always Protected 🛡️
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Multi-signature vaults and distributed custodians ensure no
                  single point of failure.
                </p>
                <p>
                  Recover your assets anytime with on-chain proofs on Bitcoin
                  and Ethereum.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 lg:p-12">
              <div className="text-center text-white">
                <Shield className="w-20 h-20 mx-auto mb-4 opacity-80" />
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full mx-auto"></div>
                  <div className="w-12 h-12 bg-white/30 rounded-full mx-auto"></div>
                  <div className="w-6 h-6 bg-white/20 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-chain Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Your Bitcoin, Any Chain
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/40 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-2 bg-white/30 rounded mx-auto"></div>
                  <div className="w-20 h-2 bg-white/30 rounded mx-auto"></div>
                  <div className="w-12 h-2 bg-white/30 rounded mx-auto"></div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Move your Bitcoin seamlessly across Ethereum, Base, Solana, and
                more to explore the best DeFi opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
