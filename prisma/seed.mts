/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';

const prisma = new PrismaClient({ log: ['info'] });

type ignore =
  | '$connect'
  | '$disconnect'
  | '$on'
  | '$transaction'
  | '$use'
  | '$executeRaw'
  | '$executeRawUnsafe'
  | '$queryRaw'
  | '$queryRawUnsafe';
let S = {
  ...({} as {
    [k in Exclude<keyof typeof prisma, ignore>]: Awaited<
      ReturnType<PrismaClient[k]['findMany']>
    >;
  }),
};

S = JSON.parse(readFileSync('./prisma/seed.json', 'utf-8'));

const applySeed = async () => {
  await prisma.preset.deleteMany({});
  await prisma.presetOther.deleteMany({});
  await prisma.bodyShape.deleteMany({});
  await prisma.bodyType.deleteMany({});
  await prisma.bodyWood.deleteMany({});
  await prisma.brand.deleteMany({});
  await prisma.bridgeBrand.deleteMany({});
  await prisma.bridgeModel.deleteMany({});
  await prisma.case.deleteMany({});
  await prisma.condition.deleteMany({});
  await prisma.country.deleteMany({});
  await prisma.fingerBoard.deleteMany({});
  await prisma.finish.deleteMany({});
  await prisma.finishType.deleteMany({});
  await prisma.fretCount.deleteMany({});
  await prisma.fretwire.deleteMany({});
  await prisma.hardware.deleteMany({});
  await prisma.inlayMaterial.deleteMany({});
  await prisma.inlays.deleteMany({});
  await prisma.knobs.deleteMany({});
  await prisma.mod.deleteMany({});
  await prisma.model.deleteMany({});
  await prisma.neckFinish.deleteMany({});
  await prisma.neckJoint.deleteMany({});
  await prisma.neckProfile.deleteMany({});
  await prisma.neckRadius.deleteMany({});
  await prisma.neckThickness1.deleteMany({});
  await prisma.neckThickness12.deleteMany({});
  await prisma.neckWood.deleteMany({});
  await prisma.nut.deleteMany({});
  await prisma.nutWidth.deleteMany({});
  await prisma.otherFeatures.deleteMany({});
  await prisma.pickguard.deleteMany({});
  await prisma.pickupBrand.deleteMany({});
  await prisma.pickupModel.deleteMany({});
  await prisma.pickupConfig.deleteMany({});
  await prisma.potArrangement.deleteMany({});
  await prisma.scaleLength.deleteMany({});
  await prisma.strapButtons.deleteMany({});
  await prisma.stringGauge.deleteMany({});
  await prisma.submodel.deleteMany({});
  await prisma.switchArrangement.deleteMany({});
  await prisma.topWood.deleteMany({});
  await prisma.tunerModel.deleteMany({});
  await prisma.tunerHead.deleteMany({});
  await prisma.tunerBrand.deleteMany({});
  await prisma.series.deleteMany({});
  await prisma.sideMarkers.deleteMany({});
  await prisma.neckBinding.deleteMany({});
  await prisma.bodyBinding.deleteMany({});
  await prisma.headstock.deleteMany({});

  await prisma.bodyBinding.createMany({ data: S.bodyBinding });
  await prisma.bodyShape.createMany({ data: S.bodyShape });
  await prisma.bodyType.createMany({ data: S.bodyType });
  await prisma.bodyWood.createMany({ data: S.bodyWood });
  await prisma.brand.createMany({ data: S.brand });
  await prisma.bridgeBrand.createMany({ data: S.bridgeBrand });
  await prisma.bridgeModel.createMany({ data: S.bridgeModel });
  await prisma.case.createMany({ data: S.case });
  await prisma.condition.createMany({ data: S.condition });
  await prisma.country.createMany({ data: S.country });
  await prisma.fingerBoard.createMany({ data: S.fingerBoard });
  await prisma.finish.createMany({ data: S.finish });
  await prisma.finishType.createMany({ data: S.finishType });
  await prisma.fretCount.createMany({ data: S.fretCount });
  await prisma.fretwire.createMany({ data: S.fretwire });
  await prisma.hardware.createMany({ data: S.hardware });
  await prisma.headstock.createMany({ data: S.headstock });
  await prisma.inlayMaterial.createMany({ data: S.inlayMaterial });
  await prisma.inlays.createMany({ data: S.inlays });
  await prisma.knobs.createMany({ data: S.knobs });
  await prisma.mod.createMany({ data: S.mod });
  await prisma.model.createMany({ data: S.model });
  await prisma.neckBinding.createMany({ data: S.neckBinding });
  await prisma.neckFinish.createMany({ data: S.neckFinish });
  await prisma.neckJoint.createMany({ data: S.neckJoint });
  await prisma.neckProfile.createMany({ data: S.neckProfile });
  await prisma.neckRadius.createMany({ data: S.neckRadius });
  await prisma.neckThickness1.createMany({ data: S.neckThickness1 });
  await prisma.neckThickness12.createMany({ data: S.neckThickness12 });
  await prisma.neckWood.createMany({ data: S.neckWood });
  await prisma.nut.createMany({ data: S.nut });
  await prisma.nutWidth.createMany({ data: S.nutWidth });
  await prisma.otherFeatures.createMany({ data: S.otherFeatures });
  await prisma.pickguard.createMany({ data: S.pickguard });
  await prisma.pickupBrand.createMany({ data: S.pickupBrand });
  await prisma.pickupConfig.createMany({ data: S.pickupConfig });
  await prisma.pickupModel.createMany({ data: S.pickupModel });
  await prisma.potArrangement.createMany({ data: S.potArrangement });
  await prisma.scaleLength.createMany({ data: S.scaleLength });
  await prisma.series.createMany({ data: S.series });
  await prisma.sideMarkers.createMany({ data: S.sideMarkers });
  await prisma.strapButtons.createMany({ data: S.strapButtons });
  await prisma.stringGauge.createMany({ data: S.stringGauge });
  await prisma.submodel.createMany({ data: S.submodel });
  await prisma.switchArrangement.createMany({ data: S.switchArrangement });
  await prisma.topWood.createMany({ data: S.topWood });
  await prisma.tunerBrand.createMany({ data: S.tunerBrand });
  await prisma.tunerHead.createMany({ data: S.tunerHead });
  await prisma.tunerModel.createMany({ data: S.tunerModel });

  await prisma.presetOther.createMany({ data: S.presetOther });
  await prisma.preset.createMany({ data: S.preset });
};

applySeed()
  .then(() => {
    console.log('seeded');
    prisma.$disconnect();
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
