import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <div className="w-32 h-32 rounded-full border-4 border-black flex items-center justify-center">
          <Icon name="Check" size={64} className="text-black" strokeWidth={3} />
        </div>
        <h1 className="text-4xl font-medium text-black">билет есть</h1>
      </div>
    </div>
  );
};

export default Index;