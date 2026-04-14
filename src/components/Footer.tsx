export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Row 1: Logo + links */}
        <div className="flex items-center gap-6 mb-4">
          <img src={`${import.meta.env.BASE_URL}logo-n3n.png`} alt="N3N" className="h-5 invert shrink-0" />
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition-colors">서비스 이용약관</a>
            <span className="text-gray-600 mx-1.5">|</span>
            <a href="https://n3n.co.kr/000_privacy-policy" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-300 hover:text-white transition-colors">개인정보처리방침</a>
            <span className="text-gray-600 mx-1.5">|</span>
            <a href="#contact" className="hover:text-white transition-colors">상담 문의</a>
          </div>
        </div>

        {/* Row 2: Company info + copyright */}
        <div className="text-[11px] text-gray-500 leading-[1.7]">
          <p>서울특별시 강남구 봉은사로 411 (삼성동), 2층 엔쓰리엔 &nbsp;|&nbsp; Tel. 02-761-5805 &nbsp;|&nbsp; Fax. 02-554-5803 &nbsp;|&nbsp; Email. business@n3n.co.kr</p>
          <p>&copy; 2017-{year} N3N Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
