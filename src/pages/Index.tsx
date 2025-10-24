import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B5278] via-[#1A1A1A] to-[#E8C468]">
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
            СОЗДАЙ СВОЮ ЦИВИЛИЗАЦИЮ
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 leading-tight">
            ИЛИ ПРИСОЕДИНЯЙСЯ К НАШИМ
          </h2>
          
          <div className="pt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#2B5278] hover:bg-[#2B5278]/90 text-white text-lg px-8 py-6 rounded-lg transition-all hover:scale-105"
            >
              <a 
                href="https://t.me/civilazatio_mops" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Icon name="Send" size={24} />
                Telegram
              </a>
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToBottom}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/70 hover:text-white transition-colors"
          aria-label="Прокрутить вниз"
        >
          <Icon name="ChevronDown" size={40} />
        </button>
      </section>

      <section className="min-h-[60vh] flex items-center justify-center px-6 pb-20">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h3 className="text-2xl md:text-4xl font-medium text-white/90 leading-relaxed">
            А ещё я ищу программистов
          </h3>
          <p className="text-xl md:text-2xl text-white/80">
            Плачу чем придётся
          </p>
          <p className="text-lg md:text-xl text-white/70">
            Договариваться со мной в Telegram:{" "}
            <a 
              href="https://t.me/TbI_PAK_R_HE_DURAK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E8C468] hover:text-[#E8C468]/80 font-medium underline decoration-2 underline-offset-4 transition-colors"
            >
              @TbI_PAK_R_HE_DURAK
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
