/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { PrismaClient } from '@prisma/client';
import { writeFileSync } from 'fs';

const prisma = new PrismaClient();

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
const S = {
  ...({} as {
    [k in Exclude<keyof typeof prisma, ignore>]: Awaited<
      ReturnType<PrismaClient[k]['findMany']>
    >;
  }),
};

const makeNewSeed = async () => {
  S.bodyShape = await prisma.bodyShape.findMany();
  S.bodyType = await prisma.bodyType.findMany();
  S.bodyWood = await prisma.bodyWood.findMany();
  S.brand = await prisma.brand.findMany();
  S.bridgeBrand = await prisma.bridgeBrand.findMany();
  S.bridgeModel = await prisma.bridgeModel.findMany();
  S.case = await prisma.case.findMany();
  S.condition = await prisma.condition.findMany();
  S.country = await prisma.country.findMany();
  S.fingerBoard = await prisma.fingerBoard.findMany();
  S.finish = await prisma.finish.findMany();
  S.finishType = await prisma.finishType.findMany();
  S.fretCount = await prisma.fretCount.findMany();
  S.fretwire = await prisma.fretwire.findMany();
  S.hardware = await prisma.hardware.findMany();
  S.inlayMaterial = await prisma.inlayMaterial.findMany();
  S.inlays = await prisma.inlays.findMany();
  S.knobs = await prisma.knobs.findMany();
  S.mod = await prisma.mod.findMany();
  S.model = await prisma.model.findMany();
  S.neckFinish = await prisma.neckFinish.findMany();
  S.neckJoint = await prisma.neckJoint.findMany();
  S.neckProfile = await prisma.neckProfile.findMany();
  S.neckRadius = await prisma.neckRadius.findMany();
  S.neckThickness1 = await prisma.neckThickness1.findMany();
  S.neckThickness12 = await prisma.neckThickness12.findMany();
  S.neckWood = await prisma.neckWood.findMany();
  S.nut = await prisma.nut.findMany();
  S.nutWidth = await prisma.nutWidth.findMany();
  S.otherFeatures = await prisma.otherFeatures.findMany();
  S.pickguard = await prisma.pickguard.findMany();
  S.pickupBrand = await prisma.pickupBrand.findMany();
  S.pickupModel = await prisma.pickupModel.findMany();
  S.pickupConfig = await prisma.pickupConfig.findMany();
  S.potArrangement = await prisma.potArrangement.findMany();
  S.preset = await prisma.preset.findMany();
  S.presetOther = await prisma.presetOther.findMany();
  S.scaleLength = await prisma.scaleLength.findMany();
  S.strapButtons = await prisma.strapButtons.findMany();
  S.stringGauge = await prisma.stringGauge.findMany();
  S.submodel = await prisma.submodel.findMany();
  S.switchArrangement = await prisma.switchArrangement.findMany();
  S.topWood = await prisma.topWood.findMany();
  S.tunerModel = await prisma.tunerModel.findMany();
  S.tunerHead = await prisma.tunerHead.findMany();
  S.tunerBrand = await prisma.tunerBrand.findMany();
	S.series = await prisma.series.findMany();
	S.sideMarkers = await prisma.sideMarkers.findMany();
	S.neckBinding = await prisma.neckBinding.findMany();
	S.bodyBinding = await prisma.bodyBinding.findMany();
	S.headstock = await prisma.headstock.findMany();

  writeFileSync('./prisma/seed.json', JSON.stringify(S, null, 2));
  console.log('New seed file created');
  console.dir(S, { depth: null });
};

makeNewSeed().then(() => {
  prisma.$disconnect();
});
