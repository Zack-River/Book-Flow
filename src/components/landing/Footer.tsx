import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-lowest w-full py-xl border-t border-outline-variant flat no shadows">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-sm">
          <Link href="/" className="text-headline-md font-headline-md font-bold text-on-surface dark:text-on-surface-variant">
            BookFlow
          </Link>
          <p className="font-body-sm text-body-sm text-on-surface dark:text-on-surface-variant mt-sm">
            © 2026 BookFlow Inc.
          </p>
          <p className="font-body-sm text-body-sm text-on-surface dark:text-on-surface-variant mt-sm">
            Made by <Link href="https://github.com/Zack-River" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Zack-River</Link>
          </p>
        </div>
        
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-xs">Company</h4>
          <Link href="/about" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/careers" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
            Careers
          </Link>
        </div>
        
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-xs">Legal</h4>
          <Link href="/privacy" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
        
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-xs">Help</h4>
          <Link href="/support" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
            Support
          </Link>
          <Link href="/contact" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
