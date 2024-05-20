"use client";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: any) {
  return (
    <Card>
      <Image
        src={
          `http://localhost:8090/api/files/${product.collectionId}/${product.id}/${product.imagen}` ||
          ""
        }
        alt="Product Image"
        width={300}
        height={300}
        className="rounded-t-lg"
      />
      <CardHeader>
        <h1>{product.nombre}</h1>
      </CardHeader>
      <CardContent>
        <p>{product.descripcion}</p>
        <Link href={`/productos/${product.id}`} className={buttonVariants()}>
          View More
        </Link>
      </CardContent>
    </Card>
  );
}
