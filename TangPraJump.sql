CREATE TABLE "ticket" (
  "id" uuid PRIMARY KEY NOT NULL,
  "user" uuid NOT NULL,
  "route" integer NOT NULL,
  "status" integer NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT 'now()',
  "updated_at" timestamp NOT NULL DEFAULT 'now()',
  "boarding_time" timestamp NOT NULL
);

CREATE TABLE "user" (
  "id" uuid PRIMARY KEY NOT NULL,
  "firstname" varchar NOT NULL,
  "surname" varchar NOT NULL,
  "mobile_no" varchar NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT 'now()',
  "updated_at" timestamp NOT NULL DEFAULT 'now()'
);

CREATE TABLE "station" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar NOT NULL,
  "latitude" decimal,
  "longtitude" decimal,
  "tambon" integer NOT NULL,
  "status" integer NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT 'now()',
  "updated_at" timestamp NOT NULL DEFAULT 'now()',
  "available_time" int[] NOT NULL DEFAULT '[480,720,960]'
);

CREATE TABLE "route" (
  "id" integer PRIMARY KEY,
  "from" integer NOT NULL,
  "to" integer NOT NULL,
  "price" integer NOT NULL,
  "status" varchar NOT NULL,
  "boarding_time" int NOT NULL,
  "duration" int NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT 'now()',
  "update_at" timestamp NOT NULL DEFAULT 'now()'
);

CREATE TABLE "tambon" (
  "id" integer PRIMARY KEY,
  "tambonThai" varchar NOT NULL,
  "tambonEng" varchar NOT NULL,
  "postCode" integer NOT NULL,
  "district_id" integer NOT NULL
);

CREATE TABLE "district" (
  "id" integer PRIMARY KEY,
  "province_id" integer NOT NULL,
  "districtThai" varchar NOT NULL,
  "districtEng" varchar NOT NULL
);

CREATE TABLE "province" (
  "id" integer PRIMARY KEY,
  "provinceThai" varchar NOT NULL,
  "provinceEng" varchar NOT NULL,
  "region" integer NOT NULL
);

COMMENT ON COLUMN "ticket"."status" IS '1=>init 2=>pending 3=>paid 4=>completed 5=>cancelled';

COMMENT ON TABLE "station" IS 'เผื่อไว้ว่า 1 ตำบล/แขวง มีมากกว่า 1 สถานี';

COMMENT ON COLUMN "station"."latitude" IS 'เผื่อทำเป็น location ละเอียด แต่ไม่ต้องใส่ก็ได้';

COMMENT ON COLUMN "station"."longtitude" IS 'เผื่อทำเป็น location ละเอียด แต่ไม่ต้องใส่ก็ได้';

COMMENT ON COLUMN "station"."status" IS '1=>active 2=>inactive 0=>cancelled';

COMMENT ON COLUMN "station"."available_time" IS 'เก็บเป็น int เพราะจะได้คำนวณจากวันนั้นๆได้ โดยตัวเลขมีความหมายมาจาก จำนวนนาทีนับจากเที่ยงคืนของวันนั้นๆ เช่น  480 => 480 นาทีนับจากเที่ยงคืน ซึ่งก็คือ 8.00 น.';

COMMENT ON COLUMN "route"."from" IS 'station id';

COMMENT ON COLUMN "route"."to" IS 'station id';

COMMENT ON COLUMN "route"."status" IS '1=>active 0=>inactive';

COMMENT ON COLUMN "tambon"."tambonThai" IS 'ชื่อตำบลภาษาไทย';

COMMENT ON COLUMN "tambon"."tambonEng" IS 'ชื่อตำบลภาษาอังกฤษ';

COMMENT ON COLUMN "tambon"."postCode" IS 'รหัสไปรษณีย์';

COMMENT ON COLUMN "tambon"."district_id" IS 'รหัสอำเภอ/เขต';

COMMENT ON COLUMN "district"."districtThai" IS 'ชื่ออำเภอ/เขตภาษาไทย';

COMMENT ON COLUMN "district"."districtEng" IS 'ชื่ออำเภอ/เขตภาษาอังกฤษ';

COMMENT ON COLUMN "province"."provinceThai" IS 'ชื่อจังหวัดภาษาไทย';

COMMENT ON COLUMN "province"."provinceEng" IS 'ชื่อจังหวัดภาษาอังกฤษ';

COMMENT ON COLUMN "province"."region" IS 'เป็น enum คือ 1=>ภาคเหนือ 2=>ภาคอีสาน 3=>ภาคตะวันออก 4=>ภาคใต้ 5=>ภาคกลาง 6=>ภาคตะวันตก';

ALTER TABLE "ticket" ADD FOREIGN KEY ("user") REFERENCES "user" ("id");

ALTER TABLE "ticket" ADD FOREIGN KEY ("route") REFERENCES "route" ("id");

ALTER TABLE "tambon" ADD FOREIGN KEY ("id") REFERENCES "station" ("tambon");

ALTER TABLE "route" ADD FOREIGN KEY ("from") REFERENCES "station" ("id");

ALTER TABLE "route" ADD FOREIGN KEY ("to") REFERENCES "station" ("id");

ALTER TABLE "district" ADD FOREIGN KEY ("id") REFERENCES "tambon" ("district_id");

ALTER TABLE "province" ADD FOREIGN KEY ("id") REFERENCES "district" ("province_id");
