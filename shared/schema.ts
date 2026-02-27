import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  studentName: text("student_name").notNull(),
  parentName: text("parent_name").notNull(),
  phone: text("phone").notNull(),
  grade: text("grade").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
});

export const insertEnquirySchema = createInsertSchema(enquiries).omit({ id: true });
export type InsertEnquiry = z.infer<typeof insertEnquirySchema>;
export type Enquiry = typeof enquiries.$inferSelect;
