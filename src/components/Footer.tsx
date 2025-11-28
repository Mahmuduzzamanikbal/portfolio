const Footer = () => {
  return (
    <footer className="relative py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Md. Mahmuduzzaman Ikbal. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with passion for <span className="text-primary">AI Research</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
