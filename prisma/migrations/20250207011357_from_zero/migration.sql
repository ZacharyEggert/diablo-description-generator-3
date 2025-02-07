-- CreateTable
CREATE TABLE "Preset" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "bodyShapeId" TEXT,
    "bodyTypeId" TEXT,
    "bodyWoodId" TEXT,
    "brandId" TEXT,
    "bridgeBrandId" TEXT,
    "bridgeModelId" TEXT,
    "caseId" TEXT,
    "coilTap" TEXT NOT NULL,
    "conditionId" TEXT,
    "countryId" TEXT,
    "fingerBoardId" TEXT,
    "finishId" TEXT,
    "finishTypeId" TEXT,
    "fretCountId" TEXT,
    "fretwireId" TEXT,
    "hardwareId" TEXT,
    "inlayMaterialId" TEXT,
    "inlaysId" TEXT,
    "killSwitch" TEXT NOT NULL,
    "knobsId" TEXT,
    "modId" TEXT,
    "modelId" TEXT,
    "neckFinishId" TEXT,
    "neckJointId" TEXT,
    "neckProfileId" TEXT,
    "neckRadiusId" TEXT,
    "neckThickness1Id" TEXT,
    "neckThickness12Id" TEXT,
    "neckWoodId" TEXT,
    "nutId" TEXT,
    "nutWidthId" TEXT,
    "otherFeaturesId" TEXT,
    "phaseSwitch" TEXT NOT NULL,
    "auxiliarySwitch" TEXT NOT NULL,
    "pickguardId" TEXT,
    "pickupBridgeId" TEXT,
    "pickupBridgeModelId" TEXT,
    "pickupConfigId" TEXT,
    "pickupMiddleId" TEXT,
    "pickupMiddleModelId" TEXT,
    "pickupNeckId" TEXT,
    "pickupNeckModelId" TEXT,
    "potArrangementId" TEXT,
    "potDateCodes" TEXT NOT NULL,
    "presetOtherId" TEXT NOT NULL,
    "scaleLengthId" TEXT,
    "serial" TEXT NOT NULL,
    "strapButtonsId" TEXT,
    "stringGaugeId" TEXT,
    "submodelId" TEXT,
    "switchArrangementId" TEXT,
    "topWoodId" TEXT,
    "tunerBrandId" TEXT,
    "tunerHeadId" TEXT,
    "tunerModelId" TEXT,
    "weight" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "seriesId" TEXT,
    "neckBindingId" TEXT,
    "bodyBindingId" TEXT,
    "sideMarkersId" TEXT,
    "headstockId" TEXT,

    CONSTRAINT "Preset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PresetOther" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "BodyShape" TEXT,
    "BodyType" TEXT,
    "BodyWood" TEXT,
    "Brand" TEXT,
    "BridgeBrand" TEXT,
    "BridgeModel" TEXT,
    "Case" TEXT,
    "coilTap" TEXT,
    "Condition" TEXT,
    "Country" TEXT,
    "FingerBoard" TEXT,
    "Finish" TEXT,
    "FinishType" TEXT,
    "FretCount" TEXT,
    "Fretwire" TEXT,
    "Hardware" TEXT,
    "InlayMaterial" TEXT,
    "Inlays" TEXT,
    "killSwitch" TEXT,
    "Knobs" TEXT,
    "Mod" TEXT,
    "Model" TEXT,
    "NeckFinish" TEXT,
    "NeckJoint" TEXT,
    "NeckProfile" TEXT,
    "NeckRadius" TEXT,
    "NeckThickness1" TEXT,
    "NeckThickness12" TEXT,
    "NeckWood" TEXT,
    "Nut" TEXT,
    "NutWidth" TEXT,
    "other" TEXT,
    "OtherFeatures" TEXT,
    "phaseSwitch" TEXT,
    "Pickguard" TEXT,
    "PickupBrand" TEXT,
    "pickupBridge" TEXT,
    "pickupBridgeModel" TEXT,
    "pickupConfig" TEXT,
    "pickupMiddle" TEXT,
    "pickupMiddleModel" TEXT,
    "PickupModel" TEXT,
    "pickupNeck" TEXT,
    "pickupNeckModel" TEXT,
    "PotArrangement" TEXT,
    "potDateCodes" TEXT,
    "ScaleLength" TEXT,
    "Serial" TEXT,
    "StrapButtons" TEXT,
    "StringGauge" TEXT,
    "Submodel" TEXT,
    "SwitchArrangement" TEXT,
    "TopWood" TEXT,
    "TunerBrand" TEXT,
    "TunerHead" TEXT,
    "TunerModel" TEXT,
    "weight" TEXT,
    "year" TEXT,
    "series" TEXT,
    "NeckBinding" TEXT,
    "BodyBinding" TEXT,
    "SideMarkers" TEXT,
    "Headstock" TEXT,

    CONSTRAINT "PresetOther_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "finishId" TEXT,
    "sortAs" TEXT,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Series" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submodel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Submodel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Finish" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brandId" TEXT,
    "sortAs" TEXT,

    CONSTRAINT "Finish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Condition" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FingerBoard" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "FingerBoard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Headstock" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Headstock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NeckRadius" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "NeckRadius_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NeckFinish" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "NeckFinish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NeckWood" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "NeckWood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NeckProfile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brandId" TEXT,
    "sortAs" TEXT,

    CONSTRAINT "NeckProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NeckThickness1" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "NeckThickness1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NeckThickness12" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "NeckThickness12_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fretwire" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Fretwire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FretCount" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "FretCount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScaleLength" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "ScaleLength_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NeckJoint" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "NeckJoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nut" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Nut_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NutWidth" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "NutWidth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InlayMaterial" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "InlayMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inlays" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Inlays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodyType" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "BodyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodyWood" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "BodyWood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinishType" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "FinishType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodyShape" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "BodyShape_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopWood" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "TopWood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BridgeBrand" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "BridgeBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Knobs" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Knobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hardware" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Hardware_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pickguard" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Pickguard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StrapButtons" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "StrapButtons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StringGauge" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "StringGauge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TunerBrand" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "TunerBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TunerModel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "tunerBrandId" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "TunerModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TunerHead" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "TunerHead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PickupConfig" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "PickupConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PickupBrand" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "PickupBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PickupModel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "PickupBrandId" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "PickupModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PotArrangement" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "PotArrangement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SwitchArrangement" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "SwitchArrangement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mod" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Mod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OtherFeatures" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "OtherFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BridgeModel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "BridgeBrandId" TEXT NOT NULL,
    "sortAs" TEXT,

    CONSTRAINT "BridgeModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NeckBinding" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "NeckBinding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodyBinding" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BodyBinding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SideMarkers" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SideMarkers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Condition_name_key" ON "Condition"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FingerBoard_name_key" ON "FingerBoard"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Headstock_name_key" ON "Headstock"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NeckRadius_name_key" ON "NeckRadius"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NeckWood_name_key" ON "NeckWood"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NeckProfile_name_key" ON "NeckProfile"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NeckThickness1_name_key" ON "NeckThickness1"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NeckThickness12_name_key" ON "NeckThickness12"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Fretwire_name_key" ON "Fretwire"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FretCount_name_key" ON "FretCount"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ScaleLength_name_key" ON "ScaleLength"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NeckJoint_name_key" ON "NeckJoint"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Nut_name_key" ON "Nut"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NutWidth_name_key" ON "NutWidth"("name");

-- CreateIndex
CREATE UNIQUE INDEX "InlayMaterial_name_key" ON "InlayMaterial"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Inlays_name_key" ON "Inlays"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BodyType_name_key" ON "BodyType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BodyWood_name_key" ON "BodyWood"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FinishType_name_key" ON "FinishType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BodyShape_name_key" ON "BodyShape"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TopWood_name_key" ON "TopWood"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BridgeBrand_name_key" ON "BridgeBrand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Knobs_name_key" ON "Knobs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Hardware_name_key" ON "Hardware"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pickguard_name_key" ON "Pickguard"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StrapButtons_name_key" ON "StrapButtons"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StringGauge_name_key" ON "StringGauge"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TunerBrand_name_key" ON "TunerBrand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PickupConfig_name_key" ON "PickupConfig"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PickupBrand_name_key" ON "PickupBrand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SwitchArrangement_name_key" ON "SwitchArrangement"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Case_name_key" ON "Case"("name");

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_bodyShapeId_fkey" FOREIGN KEY ("bodyShapeId") REFERENCES "BodyShape"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_bodyTypeId_fkey" FOREIGN KEY ("bodyTypeId") REFERENCES "BodyType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_bodyWoodId_fkey" FOREIGN KEY ("bodyWoodId") REFERENCES "BodyWood"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_bridgeBrandId_fkey" FOREIGN KEY ("bridgeBrandId") REFERENCES "BridgeBrand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_bridgeModelId_fkey" FOREIGN KEY ("bridgeModelId") REFERENCES "BridgeModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_conditionId_fkey" FOREIGN KEY ("conditionId") REFERENCES "Condition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_fingerBoardId_fkey" FOREIGN KEY ("fingerBoardId") REFERENCES "FingerBoard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_finishId_fkey" FOREIGN KEY ("finishId") REFERENCES "Finish"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_finishTypeId_fkey" FOREIGN KEY ("finishTypeId") REFERENCES "FinishType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_fretCountId_fkey" FOREIGN KEY ("fretCountId") REFERENCES "FretCount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_fretwireId_fkey" FOREIGN KEY ("fretwireId") REFERENCES "Fretwire"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_hardwareId_fkey" FOREIGN KEY ("hardwareId") REFERENCES "Hardware"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_inlayMaterialId_fkey" FOREIGN KEY ("inlayMaterialId") REFERENCES "InlayMaterial"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_inlaysId_fkey" FOREIGN KEY ("inlaysId") REFERENCES "Inlays"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_knobsId_fkey" FOREIGN KEY ("knobsId") REFERENCES "Knobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_neckFinishId_fkey" FOREIGN KEY ("neckFinishId") REFERENCES "NeckFinish"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_neckJointId_fkey" FOREIGN KEY ("neckJointId") REFERENCES "NeckJoint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_neckProfileId_fkey" FOREIGN KEY ("neckProfileId") REFERENCES "NeckProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_neckRadiusId_fkey" FOREIGN KEY ("neckRadiusId") REFERENCES "NeckRadius"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_neckThickness1Id_fkey" FOREIGN KEY ("neckThickness1Id") REFERENCES "NeckThickness1"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_neckThickness12Id_fkey" FOREIGN KEY ("neckThickness12Id") REFERENCES "NeckThickness12"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_neckWoodId_fkey" FOREIGN KEY ("neckWoodId") REFERENCES "NeckWood"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_nutId_fkey" FOREIGN KEY ("nutId") REFERENCES "Nut"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_nutWidthId_fkey" FOREIGN KEY ("nutWidthId") REFERENCES "NutWidth"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_presetOtherId_fkey" FOREIGN KEY ("presetOtherId") REFERENCES "PresetOther"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_otherFeaturesId_fkey" FOREIGN KEY ("otherFeaturesId") REFERENCES "OtherFeatures"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_pickguardId_fkey" FOREIGN KEY ("pickguardId") REFERENCES "Pickguard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_pickupBridgeId_fkey" FOREIGN KEY ("pickupBridgeId") REFERENCES "PickupBrand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_pickupBridgeModelId_fkey" FOREIGN KEY ("pickupBridgeModelId") REFERENCES "PickupModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_pickupConfigId_fkey" FOREIGN KEY ("pickupConfigId") REFERENCES "PickupConfig"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_pickupMiddleId_fkey" FOREIGN KEY ("pickupMiddleId") REFERENCES "PickupBrand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_pickupMiddleModelId_fkey" FOREIGN KEY ("pickupMiddleModelId") REFERENCES "PickupModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_pickupNeckId_fkey" FOREIGN KEY ("pickupNeckId") REFERENCES "PickupBrand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_pickupNeckModelId_fkey" FOREIGN KEY ("pickupNeckModelId") REFERENCES "PickupModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_potArrangementId_fkey" FOREIGN KEY ("potArrangementId") REFERENCES "PotArrangement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_scaleLengthId_fkey" FOREIGN KEY ("scaleLengthId") REFERENCES "ScaleLength"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_strapButtonsId_fkey" FOREIGN KEY ("strapButtonsId") REFERENCES "StrapButtons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_stringGaugeId_fkey" FOREIGN KEY ("stringGaugeId") REFERENCES "StringGauge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_submodelId_fkey" FOREIGN KEY ("submodelId") REFERENCES "Submodel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_switchArrangementId_fkey" FOREIGN KEY ("switchArrangementId") REFERENCES "SwitchArrangement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_topWoodId_fkey" FOREIGN KEY ("topWoodId") REFERENCES "TopWood"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_tunerBrandId_fkey" FOREIGN KEY ("tunerBrandId") REFERENCES "TunerBrand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_tunerHeadId_fkey" FOREIGN KEY ("tunerHeadId") REFERENCES "TunerHead"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_tunerModelId_fkey" FOREIGN KEY ("tunerModelId") REFERENCES "TunerModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_neckBindingId_fkey" FOREIGN KEY ("neckBindingId") REFERENCES "NeckBinding"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_bodyBindingId_fkey" FOREIGN KEY ("bodyBindingId") REFERENCES "BodyBinding"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_sideMarkersId_fkey" FOREIGN KEY ("sideMarkersId") REFERENCES "SideMarkers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_headstockId_fkey" FOREIGN KEY ("headstockId") REFERENCES "Headstock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Series" ADD CONSTRAINT "Series_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submodel" ADD CONSTRAINT "Submodel_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Finish" ADD CONSTRAINT "Finish_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NeckProfile" ADD CONSTRAINT "NeckProfile_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TunerModel" ADD CONSTRAINT "TunerModel_tunerBrandId_fkey" FOREIGN KEY ("tunerBrandId") REFERENCES "TunerBrand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PickupModel" ADD CONSTRAINT "PickupModel_PickupBrandId_fkey" FOREIGN KEY ("PickupBrandId") REFERENCES "PickupBrand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BridgeModel" ADD CONSTRAINT "BridgeModel_BridgeBrandId_fkey" FOREIGN KEY ("BridgeBrandId") REFERENCES "BridgeBrand"("id") ON DELETE CASCADE ON UPDATE CASCADE;
