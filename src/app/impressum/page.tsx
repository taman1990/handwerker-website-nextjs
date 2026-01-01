import { Container } from "@/components/ui/Container";

export default function ImpressumPage() {
  return (
    <Container>
      <div className="py-20 max-w-[720px] space-y-6">

        <h1 className="text-[32px] font-semibold">Impressum</h1>

        <p className="text-[14px] text-text-muted">
          Angaben gemäß § 5 TMG
        </p>

        <div className="text-[15px] space-y-2">
          <p><strong>Elektro Müller</strong></p>
          <p>Musterstraße 12</p>
          <p>93047 Regensburg</p>
        </div>

        <div className="text-[15px] space-y-2">
          <p>Telefon: 0176 0000000</p>
          <p>E-Mail: kontakt@elektro-mueller.de</p>
        </div>

        <div className="text-[15px] space-y-2">
          <p><strong>Vertreten durch:</strong></p>
          <p>Max Müller</p>
        </div>

        <div className="text-[15px] space-y-2">
          <p><strong>Umsatzsteuer-ID:</strong></p>
          <p>DE123456789</p>
        </div>

      </div>
    </Container>
  );
}
